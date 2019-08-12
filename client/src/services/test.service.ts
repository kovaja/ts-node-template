import Axios, { AxiosResponse } from 'axios';
import { ITestResponse } from '../../../shared/api.schemas';

export default class TestService {
  public static testApi(): Promise<string> {
    const url = 'api/test/init';
    const extractData = (response: AxiosResponse<ITestResponse>): string => response.data.message;

    return Axios.get<ITestResponse>(url).then(extractData);
  }
}
