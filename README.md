# Progressive Web App Example

This example uses [`next-pwa`](https://github.com/shadowwalker/next-pwa) to create a progressive web app (PWA) powered by [Workbox](https://developers.google.com/web/tools/workbox/).

## How to use

```bash
npm install
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).

## Git commande de base

Pour créer une nouvelle branche:
```bash
git checkout -b <le_nom_de_ma_branche>
#Ou pour se déplacer sur une branche
git checkout <le_nom_de_ma_branche>
#Ou pour se déplacer sur la branche précédente
git checkout -
```

Pour valider le travail fais sur une branche:
```bash
#Pour tout valider:
git add . 
#ou
git add /mon/chemin/vers/monfichier.ts
#Pour annuler le travail fais sur une branche
git checkout .
```

Pour récuperer une branche distant:
```bash
git fetch origin <le_nom_de_ma_branche> 
#Puis pour se position sur celle-ci
git checkout <le_nom_de_ma_branche>
```


Pour récuperer travail fais sur une branche distant:
```bash
#Si tu n'es pas sur la branche en question:
git checkout <le_nom_de_ma_branche>
git pull origin <le_nom_de_ma_branche> 
#Sinon
git pull origin <le_nom_de_ma_branche> 
```

Pour pousser le travail que tu as fais vers github pour que je puisse le récuperer:
```bash
#Si tu n'es pas sur la branche en question:
git add 
git commit -m "MON MESSAGE: exple: j'ai rajouter un bouton"
# Si c'est la première fois que tu push ta branche
git push -u origin <le_nom_de_ma_branche> 
#Sinon
git push origin <le_nom_de_ma_branche> 
```

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/progressive-web-app&project-name=progressive-web-app&repository-name=progressive-web-app)






