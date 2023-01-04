import Interceptor from '../config/interceptor';
import { authUrl } from '../config/api-constants';

class LoginServices {
  static login = (
    {
      email,
      password,
    },
  ) => Interceptor({
    url: authUrl.login,
    method: 'POST',
    data: {
      email,
      password,
    },
  });
}

export default LoginServices;
