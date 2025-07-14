import { customFetchOptions, SkillMilestoneData } from "../typings/types.js";

const customFetch = async (
  options: customFetchOptions
): Promise<SkillMilestoneData> => {
  const url = `${process.env.TEMPLE_OSRS_API_BASE_URL}${options.path}${process.env.GROUP_ID}`;

  const requestOptions: RequestInit = {
    method: options.method,
  };

  if (options.additionalHeaders)
    requestOptions.headers = {
      ...requestOptions.headers,
      ...options.additionalHeaders,
    };

  if (options.body) requestOptions.body = JSON.stringify(options.body);

  const res = await fetch(url, requestOptions);

  if (res.status !== 200) {
    console.log(res);
    throw new Error(
      `Bad response from the site (${res.status}). ${res.statusText}`
    );
  }

  const contentType = res.headers.get("content-type");

  let data: SkillMilestoneData;

  if (contentType?.includes("application/json")) data = await res.json();
  else throw new Error(`Something went wrong`);

  return data;
};

export default customFetch;
