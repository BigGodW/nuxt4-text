
export const useSiteSeo = async () => {
  const supabase = useSupabase() // 假定你已经封装好了 useSupabase()
  const { data: settings, error } = await supabase
    .from('site_settings')
    .select('*')
    .limit(1)
  if (error || !settings || settings.length === 0) {
    console.warn('未能加载网站 SEO 配置，使用默认值', error)
    return {
      siteName: '我的网站',
      siteDescription: '默认网站描述',
      siteKeywords: '默认,关键词',
      siteAuthor: '作者',
      ogTitle: '我的网站',
      ogDescription: '默认描述',
      ogImageUrl: '/default-og-image.png', // 可放到 public 文件夹
      twitterCard: 'summary_large_image',
      faviconUrl: '/favicon.ico', // 放到 public 文件夹
      logoUrl: '/logo.png',
    }
  }
  const s = settings[0]!
  return {
    siteName: s.site_name || '我的网站',
    siteDescription: s.site_description || '默认描述',
    siteKeywords: s.site_keywords || '默认,关键词',
    siteAuthor: s.site_author || '',
    ogTitle: s.og_title || s.site_name || '我的网站',
    ogDescription: s.og_description || s.site_description || '默认描述',
    ogImageUrl: s.og_image_url || '/default-og-image.png',
    twitterCard: s.twitter_card || 'summary_large_image',
    faviconUrl: s.site_favicon_url || '/favicon.ico',
    logoUrl: s.site_logo_url || '/logo.png',
  }
}