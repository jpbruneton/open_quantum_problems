# Compteur de visites

Compteur silencieux, non affiché sur le site (même mécanisme que thermo-book).

- `app/components/ClientEffects.js` (chargé dans `app/layout.js`) envoie un
  `POST /api/views` avec `{ slug: "home" }` (via `navigator.sendBeacon`, ou
  `fetch` en repli). Chaque page est désormais une vraie URL (`/p/M1`,
  `/c/spectral`…) et un vrai chargement ; un drapeau `sessionStorage` limite
  l'envoi à un par session de navigation, pour que le compteur continue de
  mesurer les visites du site et non chaque page vue (depuis le 16 novembre 2026 ;
  avant, le routage par hash donnait le même résultat sans ce drapeau).
- `app/api/views/route.js` valide le slug puis appelle `incrementPageView`
  (`lib/pageViews.server.js`), qui fait un `INCR` Redis sur la clé `oqm:views:home`.
- Sans variables d'environnement Redis, l'incrément est un no-op silencieux.

## Mise en place (une fois)

1. Créer une base Upstash Redis (gratuite) : Vercel → Storage → Marketplace →
   Upstash Redis, ou directement sur upstash.com (on peut réutiliser celle de
   thermo-book : les clés ne se chevauchent pas, `oqm:views:home` vs
   `views:home:{lang}:home`).
2. Renseigner dans les variables d'environnement du projet Vercel (et dans
   `.env.local` pour tester en local) :
   - `UPSTASH_REDIS_REST_URL`
   - `UPSTASH_REDIS_REST_TOKEN`
3. Redéployer.

## Lire le compteur

```
npm run views
```

Le script lit les identifiants dans l'environnement, puis `.env.local`, puis
`../thermo-book/.env.local` (même base). Sur Vercel les variables sont
« sensitive » : `vercel env pull` les renvoie vides.

Sinon :
Console Upstash → Data Browser → clé `oqm:views:home`, ou :

```
curl -H "Authorization: Bearer $UPSTASH_REDIS_REST_TOKEN" "$UPSTASH_REDIS_REST_URL/get/oqm:views:home"
```

## RGPD / confidentialité

Seul un entier est stocké (`oqm:views:home`). Le beacon n'envoie que
`{ slug: "home" }` ; la route ne lit ni IP, ni user-agent, ni referer, ni
en-tête, et n'écrit aucun log. Aucun cookie, `localStorage` ni identifiant
n'est posé : pas de donnée personnelle, donc pas de bannière de consentement
nécessaire. Le site n'a par ailleurs aucun script tiers ni analytics.
