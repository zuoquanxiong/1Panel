import http from '@/api';
import { ResPage } from '../interface';
import { Backup } from '../interface/backup';
import { Database } from '../interface/database';

export const searchMysqlDBs = (params: Database.Search) => {
    return http.post<ResPage<Database.MysqlDBInfo>>(`databases/search`, params);
};
export const listDBByVersion = (params: string) => {
    return http.get(`databases/dbs/${params}`);
};

export const backup = (params: Database.Backup) => {
    return http.post(`/databases/backup`, params);
};
export const recover = (params: Database.Recover) => {
    return http.post(`/databases/recover`, params);
};
export const searchBackupRecords = (params: Database.SearchBackupRecord) => {
    return http.post<ResPage<Backup.RecordInfo>>(`/databases/backups/search`, params);
};

export const addMysqlDB = (params: Database.MysqlDBCreate) => {
    return http.post(`/databases`, params);
};
export const updateMysqlDBInfo = (params: Database.ChangeInfo) => {
    return http.put(`/databases/${params.id}`, params);
};
export const updateMysqlVariables = (params: Database.MysqlVariables) => {
    return http.post(`/databases/variables/update`, params);
};
export const updateMysqlConfByFile = (params: Database.MysqlConfUpdateByFile) => {
    return http.post(`/databases/conf/update/byfile`, params);
};
export const deleteMysqlDB = (params: { ids: number[] }) => {
    return http.post(`/databases/del`, params);
};

export const loadMysqlBaseInfo = (param: string) => {
    return http.get<Database.BaseInfo>(`/databases/baseinfo/${param}`);
};
export const loadMysqlVariables = (param: string) => {
    return http.get<Database.MysqlVariables>(`/databases/variables/${param}`);
};
export const loadMysqlStatus = (param: string) => {
    return http.get<Database.MysqlStatus>(`/databases/status/${param}`);
};
export const loadVersions = () => {
    return http.get(`/databases/versions`);
};

// redis
export const loadRedisStatus = () => {
    return http.get<Database.RedisStatus>(`/databases/redis/status`);
};
export const loadRedisConf = () => {
    return http.get<Database.RedisConf>(`/databases/redis/conf`);
};
export const RedisPersistenceConf = () => {
    return http.get<Database.RedisPersistenceConf>(`/databases/redis/persistence/conf`);
};
export const updateRedisConf = (params: Database.RedisConfUpdate) => {
    return http.post(`/databases/redis/conf/update`, params);
};
export const updateRedisConfByFile = (params: Database.RedisConfUpdateByFile) => {
    return http.post(`/databases/redis/conf/update/byfile`, params);
};
