import { WeaTools } from 'ecCom';

// 获取高级搜索条件
export const getCondition = params => {
  return WeaTools.callApi('/api/demo05/weatableConditonDemo', 'GET', params);
};

// 获取table数据
export const getTableDatas = params => {
  return WeaTools.callApi('/api/demo05/weatableDemo', 'GET', params);
};