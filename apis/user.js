//用户模块
export function useLoginApi(body) {
  return useHttpPost("login", "/login", {
    body,
  });
}

export function useGetinfoApi() {
  return useHttpGet("getinfo", "/getinfo",{
    $:true
  });
}

//用户退出
export function useLogoutApi() {
  return useHttpGet("logout", "/logout");
}