export default function routerMiddleware(to, from, next) {
  const lang = to.params.lang || 'en'
  if (!['en', 'ru'].includes(lang)) return next('/en' + to.fullPath)
  if ($i18n.locale !== lang) $i18n.locale = lang
  return next()
}
