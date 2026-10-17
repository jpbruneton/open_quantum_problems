# Compteur de visites

Compteur silencieux, non affiché sur le site (même mécanisme que thermo-book).

- `app/page.js` (`usePageViewBeacon`) envoie un `POST /api/views` avec
  `{ slug: "home" }` une fois par chargement de page (via `navigator.sendBeacon`,
  ou `fetch` en repli). La navigation interne par hash (`#/p/...`) ne recharge
  pas la page, donc le compteur mesure les visites du site, pas chaque vue.
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
