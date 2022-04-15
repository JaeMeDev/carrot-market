import { useState } from "react";

export default function useMutation(
  url: string
): [(data: any) => void, { loading: boolean; data: any; error: any }] {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>();
  const [error, setError] = useState<undefined | any>();

  const mutation = (data: any) => {};

  return [mutation, { loading, data, error }];
}
