import Fetch from '../fetch';
// demo
export let demo = (...arg) => Fetch.post('/demo', ...arg);
/************* 免登 初始化 **************/
// 免登配置信息请求
export let get_free_login_cfg = (...arg) => Fetch.post('/jsTicket/getCfg.rjson', ...arg);
// 免登认证
export let get_free_login_auth = (...arg) => Fetch.post('/jsTicket/auth.rjson', ...arg);
// 企业会话消息(用户反馈方法)发送
export let send_corp_msg_by_code = (...arg) => Fetch.post('/message/sendCorpMsgByCode.rjson', ...arg);
// 企业会话消息(用户反馈方法)发送oa消息
export let send_msg_authorized_by_code = (...arg) => Fetch.post('/send/msg/authorized/by/code.rjson', ...arg);
// 授权用户访问企业下的自定义空间
export let pan_auth = (...arg) => Fetch.post('/jsTicket/panAuth.rjson', ...arg);
// js错误日志上报
export let js_errorinfo = (...arg) => Fetch.post('https://oapi.dingtalk.com/robot/send?access_token=45b6b67957735656b2860b1bbb4b1a8238196b4552c9cc19ca109a1d12f27005', ...arg);


// 初始化
export let app_active = (...arg) => Fetch.post('/app/active.rjson', ...arg);

// 部门信息列表
export let user_info_dept_list = (...arg) => Fetch.post('/user/info/dept/list.rjson', ...arg);
// 人员信息列表
export let user_info_user_list = (...arg) => Fetch.post('/user/info/user/list.rjson', ...arg);
// 人员以及部门信息同步
export let user_info_dept_sync = (...arg) => Fetch.post('/user/info/dept/sync.rjson', ...arg);

/*************设置（业务对象） **************/
// 业务对象配置字段获取
export let business_get_business_list = (...arg) => Fetch.post('/business/deploy/list.rjson', ...arg);
// 业务对象配置字段获取
export let business_get_business_field_list = (...arg) => Fetch.post('/business/deploy/field/list.rjson', ...arg);
// 业务对象配置字段获取
export let business_get_business_field_detail = (...arg) => Fetch.post('/business/deploy/field/detail.rjson', ...arg);
// 业务对象配置字段保存
export let business_save_business_field_list = (...arg) => Fetch.post('/business/deploy/field/save.rjson', ...arg);
// 业务对象配置字段删除
export let business_delete_business_field_list = (...arg) => Fetch.post('/business/deploy/field/delete.rjson', ...arg);
// 业务对象配置布局保存
export let business_save_business_layout_list = (...arg) => Fetch.post('/business/deploy/layout/save.rjson', ...arg);
// EXCEL 模板下载
export let business_deploy_export_template = (...arg) => Fetch.post('/business/deploy/export/template.rjson', ...arg);
// 新增页面字段列表
export let business_deploy_add_field_list = (...arg) => Fetch.post('/business/deploy/add/field/list.rjson', ...arg);
// 编辑页面字段列表
export let business_deploy_upd_field_list = (...arg) => Fetch.post('/business/deploy/upd/field/list.rjson', ...arg);
// 详情页面字段列表
export let business_deploy_detail_field_list = (...arg) => Fetch.post('/business/deploy/detail/field/list.rjson', ...arg);
// 列表页面字段列表(这个接口移到了cutomer中)
export let business_deploy_list_field_list = (...arg) => Fetch.post('/business/deploy/list/field/list.rjson', ...arg);
// 列表可选字段列表
export let business_deploy_list_field_user_list = (...arg) => Fetch.post('/business/deploy/list/field/user/list.rjson', ...arg);
// 列表字段显示隐藏
export let business_deploy_list_field_user_visible = (...arg) => Fetch.post('/business/deploy/list/field/user/visible.rjson', ...arg);
// 列表字段显示隐藏以及排序
export let order_visible_and_sort = (...arg) => Fetch.post('/business/deploy/list/field/user/order/visible.rjson', ...arg);
// 列表字段排序
export let business_deploy_list_field_order = (...arg) => Fetch.post('/business/deploy/list/field/user/order.rjson', ...arg);
/************** 查重设置 ****************/
//查重的字段列表
export let duplicate_list = (...arg) => Fetch.post('/duplicate/list.rjson', ...arg);
//设置字段
export let duplicate_valid = (...arg) => Fetch.post('/duplicate/valid.rjson', ...arg);

/*************设置（角色权限） **************/
// 获取公司模块,操作,字段
export let permission_get_module_list = (...arg) => Fetch.post('/permission/get/module/list.rjson', ...arg);
// 获取公司所有角色
export let permission_get_role_list = (...arg) => Fetch.post('/permission/get/role/list.rjson', ...arg);
// 获取角色对应权限
export let permission_get_role_permission_list = (...arg) => Fetch.post('/permission/get/role/permission/list.rjson', ...arg);
// 设置角色对应权限
export let permission_update_role_permission = (...arg) => Fetch.post('/permission/update/role/permission.rjson', ...arg);
// 设置角色对应字段
export let permission_update_role_field = (...arg) => Fetch.post('/permission/update/role/field.rjson', ...arg);
// 获取数据权限列表
export let permission_get_data_list = (...arg) => Fetch.post('/permission/role/viewdata/list.rjson', ...arg);
// 设置数据权限
export let permission_update_data_permission = (...arg) => Fetch.post('/permission/update/role/viewdata.rjson', ...arg);
// 初始化公司模块及角色
export let permission_init_corp_module = (...arg) => Fetch.post('/permission/init/corp/module.rjson', ...arg);
// 删除角色
export let permission_delete_role = (...arg) => Fetch.post('/permission/delete/role.rjson', ...arg);
// 新增角色
export let permission_add_role = (...arg) => Fetch.post('/permission/add/role.rjson', ...arg);
// 更新公司默认角色
export let permission_update_default_role = (...arg) => Fetch.post('/permission/update/default/role.rjson', ...arg);
// 更新用户角色
export let permission_update_user_role = (...arg) => Fetch.post('/permission/update/user/role.rjson', ...arg);
// 更新角色信息
export let permission_update_role = (...arg) => Fetch.post('/permission/update/role.rjson', ...arg);
// 校验角色名称
export let permission_check_role_name = (...arg) => Fetch.post('/permission/check/role/name.rjson', ...arg);
// 获取角色详情
export let permission_get_role_detail = (...arg) => Fetch.post('/permission/check/role/name.rjson', ...arg);

/*************设置（公海） **************/
// 公海列表
export let sea_high_sea_list = (...arg) => Fetch.post('/high/seas/list.rjson', ...arg);
// 公海删除
export let sea_high_sea_del = (...arg) => Fetch.post('/high/seas/del.rjson', ...arg);
// 公海成员列表
export let sea_high_member_sea_list = (...arg) => Fetch.post('/high/seas/member/list.rjson', ...arg);
// 公海新增
export let sea_high_sea_add = (...arg) => Fetch.post('/high/seas/add.rjson', ...arg);
// 公海更新
export let sea_high_sea_upd = (...arg) => Fetch.post('/high/seas/upd.rjson', ...arg);
// 公海详情
export let sea_high_sea_detail = (...arg) => Fetch.post('/high/seas/detail.rjson', ...arg);
// 人员领取上限配置
export let max_limit_set_up_user = (...arg) => Fetch.post('/corp/setup/set/users.rjson', ...arg);
// 企业客户领取上限设置
export let max_limit_set_up_corp = (...arg) => Fetch.post('/corp/setup/set/corp.rjson', ...arg);
// 删除单独领取上限配置
export let max_limit_del_group = (...arg) => Fetch.post('/corp/setup/del/group.rjson', ...arg);
// 删除用户单独领取上限配置
export let max_limit_del_user = (...arg) => Fetch.post('/corp/setup/del/user.rjson', ...arg);
// 客户领取上限配置详情
export let max_limit_set_up_detail = (...arg) => Fetch.post('/corp/setup/detail.rjson', ...arg);

/*************设置（公海 企业客户统一设置） **************/
//企业客户领取上限设置
export let corp_setup_set_corp = (...arg) => Fetch.post('/corp/setup/set/corp.rjson', ...arg);
//企业客户领取上限设置
export let corp_setup_del_group = (...arg) => Fetch.post('/corp/setup/del/group.rjson', ...arg);
//企业客户领取上限设置
export let corp_setup_del_user = (...arg) => Fetch.post('/corp/setup/del/user.rjson', ...arg);
//企业客户领取上限设置
export let corp_setup_set_user = (...arg) => Fetch.post('/corp/setup/set/user.rjson', ...arg);
//企业客户领取上限设置
export let corp_setup_detail = (...arg) => Fetch.post('/corp/setup/detail.rjson', ...arg);
//移交负责人
export let move_charger = (...arg) => Fetch.post('/customer/turn/over/charger.rjson', ...arg);
//移交负责人
export let move_collaborator = (...arg) => Fetch.post('/customer/turn/over/collaborator.rjson', ...arg);


/*************设置（工作报告） **************/
// 页面字段列表
export let work_report_field_list = (...arg) => Fetch.post('/work/field.rjson', ...arg);
// 设定修改
export let work_report_setting = (...arg) => Fetch.post('/work/settings.rjson', ...arg);
// 添加/修改字段
export let work_report_field_save = (...arg) => Fetch.post('/work/field/save.rjson', ...arg);
// 汇总数据点击事件
export let work_report_field_visible = (...arg) => Fetch.post('/work/field/visible.rjson', ...arg);

// 月报列表
export let work_report_monthly_list = (...arg) => Fetch.post('/work/monthly/list.rjson', ...arg);
// 月报新增
export let work_report_monthly_add = (...arg) => Fetch.post('/work/monthly/add.rjson', ...arg);
// 月报新增初始化
export let work_report_monthly_add_init = (...arg) => Fetch.post('/work/monthly/add/init.rjson', ...arg);
// 月报详情
export let work_report_monthly_detail = (...arg) => Fetch.post('/work/monthly/detail.rjson', ...arg);
// 月报已读
export let work_report_monthly_read = (...arg) => Fetch.post('/work/monthly/read.rjson', ...arg);
// 周报列表
export let work_report_weekly_list = (...arg) => Fetch.post('/work/weekly/list.rjson', ...arg);
// 周报新增
export let work_report_weekly_add = (...arg) => Fetch.post('/work/weekly/add.rjson', ...arg);
// 周报新增初始化
export let work_report_weekly_add_init = (...arg) => Fetch.post('/work/weekly/add/init.rjson', ...arg);
// 周报详情
export let work_report_weekly_detail = (...arg) => Fetch.post('/work/weekly/detail.rjson', ...arg);
// 周报已读
export let work_report_weekly_read = (...arg) => Fetch.post('/work/weekly/read.rjson', ...arg);
// 日报列表
export let work_report_daily_list = (...arg) => Fetch.post('/work/daily/list.rjson', ...arg);
// 日报新增
export let work_report_daily_add = (...arg) => Fetch.post('/work/daily/add.rjson', ...arg);
// 日报新增初始化
export let work_report_daily_add_init = (...arg) => Fetch.post('/work/daily/add/init.rjson', ...arg);
// 日报详情
export let work_report_daily_detail = (...arg) => Fetch.post('/work/daily/detail.rjson', ...arg);
// 日报已读
export let work_report_daily_read = (...arg) => Fetch.post('/work/daily/read.rjson', ...arg);
// 列表字段列表
export let work_list_field_list = (...arg) => Fetch.post('/work/list/field/list.rjson', ...arg);
// 新增修改详情字段列表
export let work_report_fields = (...arg) => Fetch.post('/work/report/fields.rjson', ...arg);


// 月报详情列表
export let work_monthly_detail_list = (...arg) => Fetch.post('/work/monthly/detail/list.rjson', ...arg);
// 周报详情列表
export let work_weekly_detail_list = (...arg) => Fetch.post('/work/weekly/detail/list.rjson', ...arg);
// 日报详情列表
export let work_daily_detail_list = (...arg) => Fetch.post('/work/daily/detail/list.rjson', ...arg);
// 业绩详情
export let work_achievements = (...arg) => Fetch.post('/work/achievements.rjson', ...arg);

// 添加点赞
export const work_likes_add = (...arg) => Fetch.post('/work/likes/add.rjson', ...arg);
// 删除点赞
export const work_likes_delete = (...arg) => Fetch.post('/work/likes/delete.rjson', ...arg);
// 获取点赞列表
export const work_likes_list = (...arg) => Fetch.post('/work/likes/list.rjson', ...arg);
// 添加评论
export const work_comment_add = (...arg) => Fetch.post('/work/comment/add.rjson', ...arg);
// 删除评论
export const work_comment_delete = (...arg) => Fetch.post('/work/comment/delete.rjson', ...arg);
// 评论列表
export const work_comment_list = (...arg) => Fetch.post('/work/comment/list.rjson', ...arg);

// 销售动态
export const work_dynamic = (...arg) => Fetch.post('/work/dynamic.rjson', ...arg);

// 报告统计 日 周 月
export const work_daily_report_stats = (...arg) => Fetch.post('/work/daily/report/stats.rjson', ...arg);
export const work_weekly_report_stats = (...arg) => Fetch.post('/work/weekly/report/stats.rjson', ...arg);
export const work_monthly_report_stats = (...arg) => Fetch.post('/work/monthly/report/stats.rjson', ...arg);

/*************  客户公海  **************/
// 客户新增 公海新增 的公海列表
export let sea_high_add_sea_list = (...arg) => Fetch.post('/high/seas/add/list.rjson', ...arg);
// 公海内客户列表（sea）
export let seas_list = (...arg) => Fetch.post('/customer/seas/list.rjson', ...arg);

// 查询工商信息
export let cat_listByName = (...arg) => Fetch.post('/company/listByName.rjson', ...arg);




// 公海列表【有多少个公海】
export let sea_customer_high_sea_list = (...arg) => Fetch.post('/high/seas/owner/list.rjson', ...arg);
//客户列表【customer】
export let customer_list = (...arg) => Fetch.post('/customer/list.rjson', ...arg);
// 客户选择弹窗列表 [selectCustomer]
export let customer_association_list = (...arg) => Fetch.post('/customer/association/list.rjson', ...arg);
// 客户公海列表表头
export let customer_seas_columns_list = (...arg) => Fetch.post('/business/deploy/list/field/list.rjson', ...arg);
// 场景列表 编辑场景列表的时候使用
export let scene_list = (...arg) => Fetch.post('/scene/list.rjson', ...arg);
// 带数据权限的场景列表 其他列表用  客户，联系人 场景列表
export let scene_owner_list = (...arg) => Fetch.post('/scene/owner/list.rjson', ...arg);
// 带公海权限的场景列表 客户公海 线索池用
export let scene_seas_list = (...arg) => Fetch.post('/scene/seas/list.rjson', ...arg);
// 客户新增
export let customer_add = (...arg) => Fetch.post('/customer/add.rjson', ...arg);
// 公海客户新增
export let customer_seas_add = (...arg) => Fetch.post('/customer/seas/add.rjson', ...arg);
// 客户修改
export let customer_upd = (...arg) => Fetch.post('/customer/upd.rjson', ...arg);
// 客户详情
export let customer_detail = (...arg) => Fetch.post('/customer/detail.rjson', ...arg);
// 客户单个领取
export let single_customer_receive = (...arg) => Fetch.post('/customer/receive.rjson', ...arg);
// 公海客户单个分配
export let single_customer_allocation = (...arg) => Fetch.post('/customer/seas/allocation.rjson', ...arg);
// 私海客户单个分配  私海里的客户详情暂时没有单个分配
// export let single_personal_customer_allocation = (...arg) => Fetch.post('/customer/allocation.rjson', ...arg);
// 客户批量领取
export let customer_receive = (...arg) => Fetch.post('/customer/batch/receive.rjson', ...arg);
// 公海客户批量分配
export let customer_allocation = (...arg) => Fetch.post('/customer/seas/batch/allocation.rjson', ...arg);
// TODO 私海客户列表 批量分配客户
export let customer_seas_allocation = (...arg) => Fetch.post('/customer/batch/allocation.rjson', ...arg);
// 客户批量作废
export let customer_invalid = (...arg) => Fetch.post('/customer/batch/invalid.rjson', ...arg);
//客户单个作废
export let single_customer_invalid = (...arg) => Fetch.post('/customer/invalid.rjson', ...arg);
// 获取客户导入结果
export let customer_upload_record = (...arg) => Fetch.post('/customer/upload/record.rjson', ...arg);
// 公海客户回收
export let custoemr_recycle = (...arg) => Fetch.post('/customer/seas/batch/recycle.rjson', ...arg);
// TODO 私海客户列表批量回收
export let customer_seas_recycle = (...arg) => Fetch.post('/customer/batch/recycle.rjson', ...arg);
//公海单个回收
export let single_custoemr_recycle = (...arg) => Fetch.post('/customer/seas/recycle.rjson', ...arg);
//TODO 私海单个回收  暂时没有单个私海回收
// export let single_customer_seas_recycle = (...arg) => Fetch.post('/customer/recycle.rjson', ...arg);
// 客户退回
export let custoemr_return = (...arg) => Fetch.post('/customer/back.rjson', ...arg);
// 客户成交
export let custoemr_deal = (...arg) => Fetch.post('/customer/deal.rjson', ...arg);
//客户查重列表
export let customer_duplicate_list = (...arg) => Fetch.post('/customer/duplicate/list.rjson', ...arg);
// 作废理由列表
export let customer_recycle_reasons = (...arg) => Fetch.post('/customer/recycle/reasons.rjson', ...arg);
// 回收站数据列表
export let customer_recycle_list = (...arg) => Fetch.post('/customer/recycle/list.rjson', ...arg);
// 回收站表头列表
export let business_deploy_recycle_field_list = (...arg) => Fetch.post('/business/deploy/recycle/field/list.rjson', ...arg);

// 分配客户公海
export let customer_distribute_sea = (...arg) => Fetch.post('/scene/list.rjson', ...arg);
// 作废客户公海
export let customer_destroy_sea = (...arg) => Fetch.post('/scene/list.rjson', ...arg);


/*************  跟进记录  **************/
// 跟进记录列表 【大列表中】
export let keep_list = (...arg) => Fetch.post('/keep/record/list.rjson', ...arg);
// 跟进记录列表[客户详情中]
export let keep_record_detail_list = (...arg) => Fetch.post('/keep/record/detail/list.rjson', ...arg);
// 跟进记录列表[销售机会详情中] //废弃 改用 /keep/record/detail/list
export let keep_record_opportunity_detail_list = (...arg) => Fetch.post('/keep/record/opportunity/detail/list.rjson', ...arg);

// 客户跟进记录添加
export let keep_record_customer_add = (...arg) => Fetch.post('/keep/record/customer/add.rjson', ...arg);
// 客户跟进记录修改
export let keep_record_customer_upd = (...arg) => Fetch.post('/keep/record/customer/upd.rjson', ...arg);
// 客户跟进记录详情 废弃
// export let keep_record_customer_detail = (...arg) => Fetch.post('/keep/record/customer/detail.rjson', ...arg);
// 上传记录
export let keep_upload_record = (...arg) => Fetch.post('/keep/upload/record.rjson', ...arg);


//记录详情点赞
export let sale_clue_keep_record_likes_add = (...arg) => Fetch.post('/keep/record/likes/add.rjson', ...arg);
//跟进记录获取点赞列表
export let sale_clue_keep_record_likes_get = (...arg) => Fetch.post('/keep/record/likes/list.rjson', ...arg);
//跟进记录删除点赞
export let sale_clue_keep_record_likes_delete = (...arg) => Fetch.post('/keep/record/likes/delete.rjson', ...arg);
//跟进记录点赞人数
export let sale_clue_keep_record_likes_info = (...arg) => Fetch.post('/keep/record/likes/get/info.rjson', ...arg);

//跟进记录添加评论
export let sale_clue_keep_record_comment_add = (...arg) => Fetch.post('/keep/record/comment/add.rjson', ...arg);
//跟进记录删除评论
export let sale_clue_keep_record_comment_delete = (...arg) => Fetch.post('/keep/record/comment/delete.rjson', ...arg);
//跟进记录删除评论
export let sale_clue_keep_record_comment_list = (...arg) => Fetch.post('/keep/record/comment/list.rjson', ...arg);


// 销售机会跟进记录添加
export let keep_record_opportunity_add = (...arg) => Fetch.post('/keep/record/opportunity/add.rjson', ...arg);
// 销售机会跟进记录修改
export let keep_record_opportunity_upd = (...arg) => Fetch.post('/keep/record/opportunity/upd.rjson', ...arg);
// 直接更改客户的跟进状态
export let change_record_statuses = (...arg) => Fetch.post('/customer/change/record/statuses.rjson', ...arg);

/************* 跟进状态 **************/
//跟进状态列表
export let keep_record_status = (...arg) => Fetch.post('/keep/record/statuses.rjson', ...arg);
//跟进状态全部列表 包括禁用的
export let keep_record_status_all = (...arg) => Fetch.post('/keep/record/all/statuses.rjson', ...arg);
//跟进状态启禁
export let keep_record_status_enable = (...arg) => Fetch.post('/keep/record/statuses/enable.rjson', ...arg);
//跟进状态排序
export let keep_record_status_sort = (...arg) => Fetch.post('/keep/record/statuses/sort.rjson', ...arg);
//跟进状态新增
export let keep_record_status_add = (...arg) => Fetch.post('/keep/record/statuses/add.rjson', ...arg);
//跟进状态更新
export let keep_record_status_upd = (...arg) => Fetch.post('/keep/record/statuses/upd.rjson', ...arg);

/************* 跟进类型 **************/
// 跟进类型列表
export let keep_types = (...arg) => Fetch.post('/keep/types.rjson', ...arg);
// 跟进类型全部列表 包含禁用
export let keep_types_all = (...arg) => Fetch.post('/keep/all/types.rjson', ...arg);
// 跟进类型启禁
export let keep_types_enable = (...arg) => Fetch.post('/keep/types/enable.rjson', ...arg);
// 跟进类型排序
export let keep_types_sort = (...arg) => Fetch.post('/keep/types/sort.rjson', ...arg);
// 跟进类型新增
export let keep_types_add = (...arg) => Fetch.post('/keep/types/add.rjson', ...arg);
// 跟进类型更新
export let keep_types_upd = (...arg) => Fetch.post('/keep/types/upd.rjson', ...arg);

/************* 跟进计划 **************/
// 首页列表
export let keep_plan_index_list = (...arg) => Fetch.post('/keep/plan/index/list.rjson', ...arg);
// 大列表
export let keep_plan_list = (...arg) => Fetch.post('/keep/plan/list.rjson', ...arg);
// 客户详情列表
export let keep_plan_detail_list = (...arg) => Fetch.post('/keep/plan/detail/list.rjson', ...arg);
// 销售机会详情列表
// export let keep_plan_opportunity_detail_list = (...arg) => Fetch.post('/keep/plan/opportunity/detail/list.rjson', ...arg);
// 新增(客户)
export let keep_plan_customer_add = (...arg) => Fetch.post('/keep/plan/customer/add.rjson', ...arg);
// 更新(客户)
export let keep_plan_customer_upd = (...arg) => Fetch.post('/keep/plan/customer/upd.rjson', ...arg);
// 详情(客户)  废弃
export let keep_plan_customer_detail = (...arg) => Fetch.post('/keep/plan/customer/detail.rjson', ...arg);


// 新增(销售机会)
export let keep_plan_opportunity_add = (...arg) => Fetch.post('/keep/plan/opportunity/add.rjson', ...arg);
// 更新(销售机会)
export let keep_plan_opportunity_upd = (...arg) => Fetch.post('/keep/plan/opportunity/upd.rjson', ...arg);

/*************  联系人  **************/
// 联系人列表
export let contactor_list = (...arg) => Fetch.post('/contactor/list.rjson', ...arg);
// 详情联系人列表
export let contactor_detail_list = (...arg) => Fetch.post('/contactor/detail/list.rjson', ...arg);
// 联系人添加
export let contactor_add = (...arg) => Fetch.post('/contactor/add.rjson', ...arg);
// 联系人修改
export let contactor_upd = (...arg) => Fetch.post('/contactor/upd.rjson', ...arg);
// 联系人详情
export let contactor_detail = (...arg) => Fetch.post('/contactor/detail.rjson', ...arg);
// 联系人字段[add]
export let contactor_field_list_add = (...arg) => Fetch.post('/business/deploy/add/field/list.rjson', ...arg);
// 联系人字段[upd]
export let contactor_field_list_upd = (...arg) => Fetch.post('/business/deploy/upd/field/list.rjson', ...arg);
// 联系人字段[detail]
export let contactor_field_list_detail = (...arg) => Fetch.post('/business/deploy/detail/field/list.rjson', ...arg);
// 获取联系人导入结果
export let contactor_upload_record = (...arg) => Fetch.post('/contactor/upload/record.rjson', ...arg);
// 联系人查重列表
export let contactor_duplicate_list = (...arg) => Fetch.post('/contactor/duplicate/list.rjson', ...arg);
// /************* 拜访签到 **************/
// // 拜访规则设置
// export let visit_rule_set = (...arg) => Fetch.post('/customer/visit/rule/set.rjson', ...arg);
// // 拜访规则查看
// export let visit_rule_view = (...arg) => Fetch.post('/customer/visit/rule/view.rjson', ...arg);
// // 拜访类型查看
// export let visit_types = (...arg) => Fetch.post('/customer/visit/types.rjson', ...arg);
// // 拜访添加
// export let visit_add = (...arg) => Fetch.post('/customer/visit/add.rjson', ...arg);
// // 拜访修改
// export let visit_update = (...arg) => Fetch.post('/customer/visit/update.rjson', ...arg);
// // 拜访详情
// export let visit_view = (...arg) => Fetch.post('/customer/visit/view.rjson', ...arg);
// // 拜访列表
// export let visit_list = (...arg) => Fetch.post('/customer/visit/list.rjson', ...arg);
// // 拜访列表客户详情
// export let visit_tag_list = (...arg) => Fetch.post('/customer/visit/tag/list.rjson', ...arg);
// // 拜访列表客户详情
// export let visit_search_list = (...arg) => Fetch.post('/customer/visit/search/list.rjson', ...arg);
// // 拜访签到/签退
// // export let visit_sign = (...arg) => Fetch.post('/customer/visit/sign.rjson', ...arg);
// // 客户更新地址信息
// // export let customer_upd_address_point = (...arg) => Fetch.post('/customer/upd/address/point.rjson', ...arg);

/************* 菜单&&按钮 权限 **************/
// 获取当前用户菜单
export let permission_get_menus = (...arg) => Fetch.post('/permission/getmenus.rjson', ...arg);
// 获得当前用户模块按钮
export let permission_get_buttons = (...arg) => Fetch.post('/permission/getbuttons.rjson', ...arg);

/************* 销售机会 **************/
//upd
export let opportunity_upd = (...arg) => Fetch.post('/opportunity/upd.rjson', ...arg);
//list
export let opportunity_list = (...arg) => Fetch.post('/opportunity/list.rjson', ...arg);
//add
export let opportunity_add = (...arg) => Fetch.post('/opportunity/add.rjson', ...arg);
//查重列表
export let opportunity_duplicate_list = (...arg) => Fetch.post('/opportunity/duplicate/list.rjson', ...arg);
//详情
export let opportunity_detail = (...arg) => Fetch.post('/opportunity/detail.rjson', ...arg);
// 详情列表
export let opportunity_detail_list = (...arg) => Fetch.post('/opportunity/detail/list.rjson', ...arg);
// 导入记录
export let opportunity_upload_record = (...arg) => Fetch.post(' /opportunity/upload/record.rjson', ...arg);
// 销售机会阶段保存
export let opportunity_make_stages = (...arg) => Fetch.post('/opportunity/make/stages.rjson', ...arg);
// 销售机会阶段列表
export let opportunity_stage_list = (...arg) => Fetch.post('/opportunity/stage/list.rjson', ...arg);
export let opportunity_stage_view_list = (...arg) => Fetch.post('/opportunity/stage/view/list.rjson', ...arg);

// 销售机会阶段变更
export let opportunity_changel_stage = (...arg) => Fetch.post('/opportunity/change/stage.rjson', ...arg);
// 销售机会阶段输单
export let opportunity_lose_stage = (...arg) => Fetch.post('/opportunity/lose/stage.rjson', ...arg);
// 销售机会阶段输单原因
export let opportunity_lose_stage_reason = (...arg) => Fetch.post('/opportunity/lose/stage/reason.rjson', ...arg);
// 销售机会作废
export let opportunity_invalid = (...arg) => Fetch.post('/opportunity/invalid.rjson', ...arg);
// 销售机会作废理由列表
export let opportunity_invalid_reason = (...arg) => Fetch.post('/opportunity/invalid/reason.rjson', ...arg);

/************* 审批 **************/
// 流程新增
export let flow_add = (...arg) => Fetch.post('/flow/add.rjson', ...arg);
// 流程状态开关
export let flow_status_toggle = (...arg) => Fetch.post('/flow/status/toggle.rjson', ...arg);
// // 流程类型列表 [合同审批这期先写死]
export let flow_type_list = (...arg) => Fetch.post('/flow/type/list.rjson', ...arg);
// 流程详情
export let flow_type_detail = (...arg) => Fetch.post('/flow/detail.rjson', ...arg);
// 设置-流程设置列表
export let flow_type_set_detail = (...arg) => Fetch.post(' /flow/type/setup/detail.rjson', ...arg);
// 流程列表
export let flow_instance_list = (...arg) => Fetch.post('/flow/instance/list.rjson', ...arg);
// // 流程发起 【接口是后端使用的】
export let flow_start = (...arg) => Fetch.post('/flow/start.rjson', ...arg);
// 流程推进
export let flow_process = (...arg) => Fetch.post('/flow/process.rjson', ...arg);
// 页面tab分类列表
export let flow_tab_list = (...arg) => Fetch.post('/flow/tab/list.rjson', ...arg);
// 审批中的合同详情
export let contract_detail_flow = (...arg) => Fetch.post('/contract/detail/flow.rjson', ...arg);

/************* 报表 **************/
// 销售报表查询
export let report_customer_sale = (...arg) => Fetch.post('/report/customer/sale.rjson', ...arg);
// 公共【数据权限-场景列表】
export const common_role_view_data_list = (...arg) => Fetch.post('/common/role/view/data/list.rjson', ...arg);

// 销售行为分析【报表-综合分析】
export const keep_report_customer_analyze = (...arg) => Fetch.post('/keep/report/customer/analyze.rjson', ...arg);
// 销售行为分析【报表-按日期】
export const keep_report_customer_data_analyze = (...arg) => Fetch.post('/keep/report/customer/date/analyze.rjson', ...arg);
// 销售行为分析【报表-按人员
export const keep_report_customer_user_analyze = (...arg) => Fetch.post('/keep/report/customer/user/analyze.rjson', ...arg);

// 合同成交分析【报表-综合分析】
export const contract_report_analyze = (...arg) => Fetch.post('/contract/report/analyze.rjson', ...arg);
// 合同成交分析【报表-按日期】
export const contract_report_date_analyze = (...arg) => Fetch.post('/contract/report/date/analyze.rjson', ...arg);
// 合同成交分析【报表-按人员】
export const contract_report_user_analyze = (...arg) => Fetch.post('/contract/report/user/analyze.rjson', ...arg);

// 回款情况分析【报表-综合分析】
export const real_payment_report_analyze = (...arg) => Fetch.post('/real/payment/report/analyze.rjson', ...arg);
// 回款情况分析【报表【报表-按日期】
export const real_payment_report_date_analyze = (...arg) => Fetch.post('/real/payment/report/date/analyze.rjson', ...arg);
// 回款情况分析【报表【报表-按人员】
export const real_payment_report_user_analyze = (...arg) => Fetch.post('/real/payment/report/user/analyze.rjson', ...arg);

/************* 合同/回款 **************/
// 合同列表
export let contract_list = (...arg) => Fetch.post('/contract/list.rjson', ...arg);
// 合同列表(详情)
export let contract_detail_list = (...arg) => Fetch.post('/contract/detail/list.rjson', ...arg);
// 合同查重列表
export let contract_duplicate_list = (...arg) => Fetch.post('/contract/duplicate/list.rjson', ...arg);
// 合同新增
export let contract_add = (...arg) => Fetch.post('/contract/add.rjson', ...arg);
// 合同修改
export let contract_upd = (...arg) => Fetch.post('/contract/upd.rjson', ...arg);
// 合同详情
export let contract_detail = (...arg) => Fetch.post('/contract/detail.rjson', ...arg);
// 合同作废
export let contract_invalid = (...arg) => Fetch.post('/contract/invalid.rjson', ...arg);
// 合同作废原因
export let contract_invalid_reason = (...arg) => Fetch.post('/contract/invalid/reason.rjson', ...arg);

// 计划回款新增
export let planpayment_add = (...arg) => Fetch.post('/plan/payment/add.rjson', ...arg);
// 计划回款修改
export let planpayment_upd = (...arg) => Fetch.post('/plan/payment/upd.rjson', ...arg);
// 计划回款删除
export let planpayment_del = (...arg) => Fetch.post('/plan/payment/del.rjson', ...arg);
// 计划回款详情
export let planpayment_detail = (...arg) => Fetch.post('/plan/payment/detail.rjson', ...arg);
// 计划回款列表
export let planpayment_list = (...arg) => Fetch.post('/plan/payment/list.rjson', ...arg);
// 计划回款详情列表
export let planpayment_detail_list = (...arg) => Fetch.post('/plan/payment/detail/list.rjson', ...arg);

// 实际回款新增
export let realpayment_add = (...arg) => Fetch.post('/real/payment/add.rjson', ...arg);
// 实际回款新增
export let realpayment_upd = (...arg) => Fetch.post('/real/payment/upd.rjson', ...arg);
// 实际回款新增
export let realpayment_del = (...arg) => Fetch.post('/real/payment/del.rjson', ...arg);
// 实际回款新增
export let realpayment_detail = (...arg) => Fetch.post('/real/payment/detail.rjson', ...arg);

/************* 公共  **************/
export let common_dept_list = (...arg) => Fetch.post('/common/dept/list.rjson', ...arg);

//自定义列宽度
export let business_set_field_width = (...arg) => Fetch.post('/business/deploy/list/field/user/width.rjson', ...arg);

// 测试接口
// 初始化业务配置对象接口 [只在测试时调用 发布上线记得删掉]
export let business_deploy_init = (...arg) => Fetch.post('/test/deploy/list.rjson', ...arg);
// 模拟登录接口
export let test_login = (...arg) => Fetch.post('/test/login.rjson', ...arg);
export let test_deploy = (...arg) => Fetch.post('/test/deploy/init.rjson?reload=true', ...arg);

/**************** 回收站 *********************/
export let recycle_single = (...arg) => Fetch.post('/customer/restore.rjson?reload=true', ...arg);
export let recycle_delete = (...arg) => Fetch.post('/customer/delete.rjson?reload=true', ...arg);
export let recycle_batch_delete = (...arg) => Fetch.post('/customer/batch/delete.rjson?reload=true', ...arg);

/***************** 授权 *****************/
export let cancel_auth = (...arg) => Fetch.post('/permission/cancle/authorization.rjson?reload=true', ...arg);
export let permission_update = (...arg) => Fetch.post('/permission/update/users/role.rjson?reload=true', ...arg);
export let get_admin_list = (...arg) => Fetch.post('/user/info/admin/list.rjson?reload=true', ...arg);
export let users_permissions_update = (...arg) => Fetch.post('/permission/update/users/roles.rjson?reload=true', ...arg);



/*************************** 线索模块 ***************************/
//线索列表
export let get_sale_clue_list = (...arg) => Fetch.post('/sale/clue/list.rjson?reload=true', ...arg);
//新增线索
export let sale_clue_add = (...arg) => Fetch.post('/sale/clue/add.rjson?reload=true', ...arg);
//更新线索
export let sale_clue_update = (...arg) => Fetch.post('/sale/clue/upd.rjson?reload=true', ...arg);
//线索详情
export let sale_clue_detail = (...arg) => Fetch.post('/sale/clue/detail.rjson?reload=true', ...arg);
// 线索导入 ******** 上传记录
export let sale_clue_upload_record = (...arg) => Fetch.post('/sale/clue/upload/record.rjson?reload=true', ...arg);
//下载线索模板
export let sale_clue_upload_template = (...arg) => Fetch.post('/sale/clue/upload/template.rjson?reload=true', ...arg);
//批量导入线索
export let sale_clue_upload_excel = (...arg) => Fetch.post('/sale/clue/upload/excel.rjson?reload=true', ...arg);
//错误记录
export let sale_clue_upload_error = (...arg) => Fetch.post('/sale/clue/upload/error.rjson?reload=true', ...arg);
//单个作废
export let sale_clue_invalid = (...arg) => Fetch.post('/sale/clue/invalid.rjson?reload=true', ...arg);
//批量作废
export let sale_clue_batch_invalid = (...arg) => Fetch.post('/sale/clue/batch/invalid.rjson?reload=true', ...arg);
//单个分配
export let sale_clue_allocation = (...arg) => Fetch.post('/sale/clue/allocation.rjson?reload=true', ...arg);
//批量分配
export let sale_clue_batch_allocation = (...arg) => Fetch.post('/sale/clue/batch/allocation.rjson?reload=true', ...arg);
//单个回收
export let sale_clue_recycle = (...arg) => Fetch.post('/sale/clue/recycle.rjson?reload=true', ...arg);
//批量回收
export let sale_clue_batch_recycle = (...arg) => Fetch.post('/sale/clue/batch/recycle.rjson?reload=true', ...arg);
//单个领取
export let sale_clue_receive = (...arg) => Fetch.post('/sale/clue/receive.rjson?reload=true', ...arg);
//批量领取
export let sale_clue_batch_receive = (...arg) => Fetch.post('/sale/clue/batch/receive.rjson?reload=true', ...arg);

//线索跟进记录
//新增跟进计划
export let sale_clue_keep_plan_add = (...arg) => Fetch.post('/sale/clue/keep/plan/add.rjson?reload=true', ...arg);
//跟进计划详情  废弃
// export let sale_clue_keep_plan_detail = (...arg) => Fetch.post('/sale/clue/keep/plan/detail.rjson?reload=true', ...arg);

// TODO 所有的计划详情均调用该接口
export let keep_plan_detail = (...arg) => Fetch.post('/keep/plan/detail.rjson?reload=true', ...arg);
//新增跟进记录
export let sale_clue_keep_record_add = (...arg) => Fetch.post('/sale/clue/keep/record/add.rjson?reload=true', ...arg);
//跟进记录详情  所有跟进记录接口调用 keep/record/detail
// export let sale_clue_keep_record_detail = (...arg) => Fetch.post('/sale/clue/keep/record/detail.rjson?reload=true', ...arg);
export let keep_record_detail = (...arg) => Fetch.post('/keep/record/detail.rjson?reload=true', ...arg);

// 线索转化必填的字段
export let sale_clue_transfer_field_list = (...arg) => Fetch.post('/sale/clue/transfer/field/list.rjson?reload=true', ...arg);
// 线索转化
export let sale_clue_transfer = (...arg) => Fetch.post('/sale/clue/transfer.rjson?reload=true', ...arg);
//我的线索
export let my_sale_clue_list = (...arg) => Fetch.post('/sale/clue/owner/list.rjson?reload=true', ...arg);
// 直接修改跟进状态
export let sale_clue_keep_record_status = (...arg) => Fetch.post('/sale/clue/change/record/statuses.rjson?reload=true', ...arg);
export let sale_clue_add_list = (...arg) => Fetch.post('/high/seas/add/list.rjson', ...arg);

/*************************** 公共的作废理由 ***************************/
export let common_invalid_reasons = (...arg) => Fetch.post('/common/invalid/reasons.rjson?reload=true', ...arg);

/*************************** 协同人 ***************************/
//合同协作列表
export let contract_collaborator_list = (...arg) => Fetch.post('/contract/collaborator/list.rjson?reload=true', ...arg);
//合同添加协作人
export let contract_collaborator_add = (...arg) => Fetch.post(' /contract/collaborator/add.rjson?reload=true', ...arg);
//销售机会协作列表
export let opportunity_collaborator_list = (...arg) => Fetch.post('/opportunity/collaborator/list.rjson?reload=true', ...arg);
//销售机会添加协作人
export let opportunity_collaborator_add = (...arg) => Fetch.post('/opportunity/collaborator/add.rjson?reload=true', ...arg);
//客户协作列表
export let customer_collaborator_list = (...arg) => Fetch.post('/customer/collaborator/list.rjson?reload=true', ...arg);
//客户协作添加协作人
export let customer_collaborator_add = (...arg) => Fetch.post('/customer/collaborator/add.rjson?reload=true', ...arg);
//线索协作列表
export let sale_clue_collaborator_list = (...arg) => Fetch.post(' /sale/clue/collaborator/list.rjson?reload=true', ...arg);
//线索添加协作人
export let sale_clue_collaborator_add = (...arg) => Fetch.post(' /sale/clue/collaborator/add.rjson?reload=true', ...arg);


/*************************** 日程 ***************************/
//添加日程
export let schedule_add = (...arg) => Fetch.post('/schedule/add.rjson', ...arg);
//日程列表
export let schedule_list = (...arg) => Fetch.post('/schedule/list.rjson', ...arg);
//销售机会反选
export let opportunity_inner_list = (...arg) => Fetch.post('/opportunity/inner/list.rjson', ...arg);
//线索反选
export let sale_clue_list = (...arg) => Fetch.post('/sale/clue/inner/list.rjson', ...arg);
//日程设置完成
export let schedule_finish = (...arg) => Fetch.post('/schedule/finish.rjson', ...arg);
//日程详情
export let schedule_detail = (...arg) => Fetch.post('/schedule/detail.rjson', ...arg);
//日程删除
export let schedule_delete = (...arg) => Fetch.post('/schedule/delete.rjson', ...arg);
//日程更新
export let schedule_updata = (...arg) => Fetch.post('/schedule/upd.rjson', ...arg);
//关联对象日程列表
export let schedule_list_relation = (...arg) =>
  Fetch.post(' /schedule/list/relation.rjson', ...arg);

//获取用户所管理人员
export let get_user_list = (...arg) =>
  Fetch.post('/common/role/user/module.rjson', ...arg);


//客户选择列表
export let customer_inner_list = (...arg) => Fetch.post('/customer/inner/list.rjson', ...arg);
//客户详情权限
export let customer_check_detail = (...arg) => Fetch.post('/data/permission/check/customer/detail.rjson', ...arg);
//线索详情权限
export let clue_check_detail = (...arg) => Fetch.post('/data/permission/check/saleClue/detail.rjson', ...arg);
//合同详情权限
export let contract_check_detail = (...arg) => Fetch.post('/data/permission/check/contract/detail.rjson', ...arg);
//销售机会详情权限
export let opportunity_check_detail = (...arg) => Fetch.post('/data/permission/check/opportunity/detail.rjson', ...arg);

//错误日志
export let error_add = (...arg) => Fetch.post('/errinfo/add.rjson', ...arg);


/****************************** 产品模块 ********************************/
//产品sku列表 sku即规格
export let product_skus_list = (...arg) => Fetch.post('/product/dic/product/skus.rjson', ...arg);
//产品sku修改
export let product_skus_upd = (...arg) => Fetch.post('/product/dic/upd/product/skus.rjson', ...arg);
//产品sku删除
export let product_skus_del = (...arg) => Fetch.post('/product/dic/del/product/skus.rjson', ...arg);
//产品sku添加
export let product_skus_add = (...arg) => Fetch.post('/product/dic/add/product/skus.rjson', ...arg);
//产品单位列表
export let product_units_list = (...arg) => Fetch.post('/product/dic/product/units.rjson', ...arg);
//产品单位修改
export let product_units_upd = (...arg) => Fetch.post('/product/dic/upd/product/units.rjson', ...arg);
//产品单位删除
export let product_units_del = (...arg) => Fetch.post('/product/dic/del/product/units.rjson', ...arg);
//产品单位添加
export let product_units_add = (...arg) => Fetch.post('/product/dic/add/product/units.rjson', ...arg);
//产品类型列表
export let product_types_list = (...arg) => Fetch.post('/product/dic/product/types.rjson', ...arg);
//产品类型修改
export let product_types_upd = (...arg) => Fetch.post('/product/dic/upd/product/types.rjson', ...arg);
//产品类型删除
export let product_types_del = (...arg) => Fetch.post('/product/dic/del/product/types.rjson', ...arg);
//产品类型添加
export let product_types_add = (...arg) => Fetch.post('/product/dic/add/product/types.rjson', ...arg);
//产品列表
export let product_list = (...arg) => Fetch.post('/product/list.rjson', ...arg);
//产品详情
export let product_detail = (...arg) => Fetch.post('/product/detail.rjson', ...arg);
//产品添加
export let product_add = (...arg) => Fetch.post('/product/add.rjson', ...arg);
//查重列表
export let product_deplicate_list = (...arg) => Fetch.post('/product/duplicate/list.rjson', ...arg);
//产品导入记录
export let product_upload_record = (...arg) => Fetch.post('/product/upload/record.rjson', ...arg);
//产品修改
export let product_upd = (...arg) => Fetch.post('/product/upd.rjson', ...arg);
//产品单个上下架
export let product_on_shelf = (...arg) => Fetch.post('/product/schelves.rjson', ...arg);
//产品单个上下架
export let product_batch_on_shelf = (...arg) => Fetch.post('/product/batch/schelves.rjson', ...arg);
//产品单个删除
export let product_del = (...arg) => Fetch.post('/product/del.rjson', ...arg);
//产品批量删除
export let product_batch_del = (...arg) => Fetch.post('/product/batch/del.rjson', ...arg);
//删除分类之前查询是否有在使用中
export let check_del_product_types = (...arg) => Fetch.post('/product/dic/check/del/product/types.rjson', ...arg);









