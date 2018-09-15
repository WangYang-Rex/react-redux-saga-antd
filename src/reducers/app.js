import * as Act from 'actions';
import util from 'util';

const initState = {
    userInfo: util.getUserInfo(),
    permission_menus : [],
    permission_buttons : [],
    common_dept_list: [],
    deploy_list : [],
    keep_record_status:[]
}

export default function app(state = initState, action) {
    switch(action.type) {
        case Act.APP_SET_USERINFO:
            return Object.assign({}, state, {
                userInfo: action.userInfo
            });
        case Act.INIT_PERMISSION_MENUS:
            return Object.assign({},state, {...action.params});
        case Act.INIT_PERMISSION_BUTTONS:
            return Object.assign({},state, {...action.params});
        case Act.REDUCER_SET_FIELDS:
            return Object.assign({}, state, {
              [action.fromType + '_fields']: action.data
            });
        case Act.REDUCER_SET_DETAIL_FIELDS:
            return Object.assign({}, state, {
              [action.fromType + '_detail_fields']: action.data
            });
        case Act.REDUCER_SET_COLUMNS_FIELDS:
            return Object.assign({}, state, {
              [action.fromType + '_columns_list_fields']: action.data
            });
        case Act.INIT_COMMON_DEPT_LIST:
            return Object.assign({},state, {...action.params});
        case Act.INIT_DEPLOY_LIST:
            return Object.assign({},state, {...action.params});
        case Act.INIT_KEEP_RECORD_STATUS:
            return Object.assign({},state, {...action.params});
      case Act.SET_COMMON_INVALID_REASONS:
        return Object.assign({},state, {...action.params});
        // case Act.REDUCER_SET_SCENE_LIST:
        //     return Object.assign({}, state, {
        //       scene_list: action.data
        //     });
        default:
            return state;
    }
}
