//var date = new Date().getTime();
//设置localStorage的值
//LocalStorageManager.set("test", "你好", date + 10000);
//获取localStorage的值
//var data = LocalStorageManager.get("test");

const utils = {
  LocalStorageManager : {
    set: function (key, value, ttl_ms) {
      let data = { value: value, expirse: new Date(ttl_ms).getTime() };
      localStorage.setItem(key, JSON.stringify(data));
    },
    get: function (key) {
      let token = localStorage.getItem(key)
      if (token !== null) {
        let data = JSON.parse(token);
        debugger
        if (data.expirse != null && data.expirse < new Date().getTime()) {
          localStorage.removeItem(key);
        } else {
          return data.value;
        }
      }
      return null;
    }
  }
};

export default utils;
