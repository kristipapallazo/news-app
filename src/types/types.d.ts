import { Dispatch, SetStateAction } from "react";
// interface configObj {
//   newsAPI: string;
// }
interface NewsAPI {
  baseUrl: string;
  apiKey: string;
}

type SetStateFn<D> = Dispatch<SetStateAction<D>>;
