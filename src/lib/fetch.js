/*
 * @Author: wangyang
 * @Date: 2017-09-26 16:17:55
 * @Last Modified by: baozi
 * @Last Modified time: 2017-11-06 19:04:54
 */
// https://github.com/github/fetch
import 'whatwg-fetch';
// import { message, Modal } from 'antd'
import React from 'react';

let defaultOption = {
	credentials: 'same-origin',
	withCredentials: true
}

let getFullUrl = (url) => {
	return url;
}
let commonRes = (p) => {
	// message.loading('loading...')
	return p
		.then(res => { return res.json() }) //序列化res
		.then(res => {
			if (res.result >= 100 && res.result <= 200) {
				return res.data || true;
			} else if (res.result == 327) {
				// // 判断授权是否超过上限
				// Modal.info({
				// 	title: '超过授权上限了',
				// 	content: (
				// 		<div>
				// 			<p>当前用户版本，最多支持{util.getValueFromCookieByKey("crm_item_max_people")}人，已授权{util.getValueFromCookieByKey("crm_item_max_people")}人了</p>
				// 			<p>请联系客服进行升级，电话：13018967365</p>
				// 		</div>
				// 	),
				// 	onOk() { },
				// })
				return
			} else {
				if (res.result == 702 || res.result == 703) {
					location.hash = '/login?needAuth=true&expired=true'
					return
				}
				// message.error(res.message);
				throw res;
			}
		});
}

let commonReq = (p) => {
	return p;
}

let get = (url, data) => {
	let tmp = [];
	if (data) {
		Object.keys(data).map(key => {
			tmp.push(key + '=' + data[key]);
		});
	}

	let query = tmp.join('&');
	if (url.indexOf('?') > -1) {
		url += '&' + query;
	} else url += '?' + query;
	return commonRes(fetch(getFullUrl(url), defaultOption));
}

let post = (url, data = {}) => {
	let option = Object.assign({}, defaultOption, {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json; charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
		},
		// withCredentials: true,
		body: JSON.stringify(data),
		credentials: 'include',
	});
	return commonRes(fetch(getFullUrl(url), option));
}

window.Fetch = {
	get: commonReq(get),
	post: commonReq(post),
}
module.exports = {
	get: commonReq(get),
	post: commonReq(post),
}

