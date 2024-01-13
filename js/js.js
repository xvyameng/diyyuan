var rule = {
    title'荐片',
    host'httpapi2.rinhome.com',
    homeUrl'httpsyjpapipxblwdohpakljwg.hxhzs.comapitaghandcode=unknown601193cf375db73d&channel=wandoujia',网站的首页链接,用于分类获取和推荐获取
	url'apicrumblistarea=0&category_id=fyclass&page=fypage&type=0&limit=24&fyfilter',
    class_name'全部&电影&电视剧&动漫&综艺',
    class_url'0&1&2&3&4',
    detailUrl'apinodedetailchannel=wandoujia&token=&id=fyid',二级详情拼接链接(json格式用)
    searchUrl'apivideosearchkey=&page=fypage',
    searchable2,
    quickSearch0,
    filterable1,
    filter{'0' [{'key' 'year', 'name' '年代', 'value' [{'n' '全部', 'v' '0'}, {'n' '2023', 'v' '153'}, {'n' '2022', 'v' '101'}, {'n' '2021', 'v' '118'}, {'n' '2020', 'v' '16'}, {'n' '2019', 'v' '7'}, {'n' '2018', 'v' '2'}, {'n' '2017', 'v' '3'}, {'n' '2016', 'v' '22'}]}, {'key' 'sort', 'name' '排序', 'value' [{'n' '热门', 'v' 'hot'}, {'n' '评分', 'v' 'rating'}, {'n' '更新', 'v' 'update'}]}], '1' [{'key' 'year', 'name' '年代', 'value' [{'n' '全部', 'v' '0'}, {'n' '2023', 'v' '153'}, {'n' '2022', 'v' '101'}, {'n' '2021', 'v' '118'}, {'n' '2020', 'v' '16'}, {'n' '2019', 'v' '7'}, {'n' '2018', 'v' '2'}, {'n' '2017', 'v' '3'}, {'n' '2016', 'v' '22'}]}, {'key' 'sort', 'name' '排序', 'value' [{'n' '热门', 'v' 'hot'}, {'n' '评分', 'v' 'rating'}, {'n' '更新', 'v' 'update'}]}], '2' [{'key' 'year', 'name' '年代', 'value' [{'n' '全部', 'v' '0'}, {'n' '2023', 'v' '153'}, {'n' '2022', 'v' '101'}, {'n' '2021', 'v' '118'}, {'n' '2020', 'v' '16'}, {'n' '2019', 'v' '7'}, {'n' '2018', 'v' '2'}, {'n' '2017', 'v' '3'}, {'n' '2016', 'v' '22'}]}, {'key' 'sort', 'name' '排序', 'value' [{'n' '热门', 'v' 'hot'}, {'n' '评分', 'v' 'rating'}, {'n' '更新', 'v' 'update'}]}], '3' [{'key' 'year', 'name' '年代', 'value' [{'n' '全部', 'v' '0'}, {'n' '2023', 'v' '153'}, {'n' '2022', 'v' '101'}, {'n' '2021', 'v' '118'}, {'n' '2020', 'v' '16'}, {'n' '2019', 'v' '7'}, {'n' '2018', 'v' '2'}, {'n' '2017', 'v' '3'}, {'n' '2016', 'v' '22'}]}, {'key' 'sort', 'name' '排序', 'value' [{'n' '热门', 'v' 'hot'}, {'n' '评分', 'v' 'rating'}, {'n' '更新', 'v' 'update'}]}], '4' [{'key' 'year', 'name' '年代', 'value' [{'n' '全部', 'v' '0'}, {'n' '2023', 'v' '153'}, {'n' '2022', 'v' '101'}, {'n' '2021', 'v' '118'}, {'n' '2020', 'v' '16'}, {'n' '2019', 'v' '7'}, {'n' '2018', 'v' '2'}, {'n' '2017', 'v' '3'}, {'n' '2016', 'v' '22'}]}, {'key' 'sort', 'name' '排序', 'value' [{'n' '热门', 'v' 'hot'}, {'n' '评分', 'v' 'rating'}, {'n' '更新', 'v' 'update'}]}]},
    filter_url'sort={{fl.sort or hot}}&year={{fl.year or 0}}',
    headers{
		'User-Agent''jianpian-android350',
		'JPAUTH''y261ow7kF2dtzlxh1GS9EB8nbTxNmaKQQIAjctlKiEv'
	},
    timeout5000,
    limit8,
    play_parsetrue,
    play_json[{
      re'',
      json{
          parse0,
          jx0
      }
    }],
    lazy'',
     doubletrue,
    图片来源'@Referer=www.jianpianapp.com@User-Agent=jianpian-version353',
	 推荐'jsondata;room;;cover;;',
	推荐'json.video;;;;',
	一级'jsondata;title;path;playlist.title;id',
    二级{
    title'data.title',
    desc';data.description;data.id',
    img'data.thumbnail',
    content'data.thumbnail',
    is_json1,
    tabs'jsTABS=[];if(html.data.have_ftp_ur == 1){TABS.push(边下边播超清版)}if(html.data.have_m3u8_ur == 1){TABS.push(在线点播普清版)}',
    lists'jslog(TABS);LISTS=[];TABS.forEach(function(tab){if(边下边播.test(tab)){let ftp=html.data.new_ftp_list;let d=ftp.map(function(it){return it.title+$+(m3u8.test(it.url)play_url+it.urltvbox-xg+it.url)});LISTS.push(d)}else if(在线点播.test(tab)){let m3u=html.data.new_m3u8_list;let d=m3u.map(function(it){return it.title+$+(m3u8.test(it.url)play_url+it.urltvbox-xg+it.url)});LISTS.push(d)}});',
    },
    搜索'jsondata;;thumbnail;mask;',
}