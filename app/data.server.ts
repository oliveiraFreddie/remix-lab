import qs from "qs";

const url = process.env.STRAPI_URL || "http://127.0.0.1:1337";

type ContactMutation = {
  id?: string;
  first?: string;
  last?: string;
  avatar?: string;
  twitter?: string;
  notes?: string;
  favorite?: boolean;
};

export type ContactRecord = ContactMutation & {
  id: string;
  createdAt: string;
};

export function flattenAttributes(data: any): any {
  // Base case for recursion
  if (!data) return null;

  // Handling array data
  if (Array.isArray(data)) {
    return data.map(flattenAttributes);
  }

  let flattened: { [key: string]: any } = {};

  // Handling attributes
  if (data.attributes) {
    for (let key in data.attributes) {
      if (
        typeof data.attributes[key] === "object" &&
        data.attributes[key] !== null &&
        "data" in data.attributes[key]
      ) {
        flattened[key] = flattenAttributes(data.attributes[key].data);
      } else {
        flattened[key] = data.attributes[key];
      }
    }
  }

  // Copying non-attributes and non-data properties
  for (let key in data) {
    if (key !== "attributes" && key !== "data") {
      flattened[key] = data[key];
    }
  }

  // Handling nested data
  if (data.data) {
    flattened = { ...flattened, ...flattenAttributes(data.data) };
  }

  return flattened;
}

/* API CALLS */

export async function getContacts(q: string | null) {
  // Search filter
  const query = qs.stringify({
    filters: {
      $or: [
        { first: { $contains: q } },
        { last: { $contains: q } },
        { twitter: { $contains: q } },
      ],
    },
    pagination: {
      pageSize: 50,
      page: 1,
    },
  });

  try {
    const response = await fetch(url + "/api/contacts?" + query);
    const data = await response.json();
    const flattenAttributesData = flattenAttributes(data.data);
    return flattenAttributesData;
  } catch (error) {
    console.log(error);
    throw new Error("Oh no! Something went wrong!");
  }
}

// Make the fetch post request to Strapi endpoint
export async function createContact(data: any) {
  try {
    const response = await fetch(url + "/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { ...data } }),
    });
    const responseData = await response.json();
    const flattenAttributesData = flattenAttributes(responseData.data);
    return flattenAttributesData;
  } catch (error) {
    console.log(error);
  }
}

export async function getContact(id: string) {
  try {
    const response = await fetch(url + "/api/contacts/" + id);
    const data = await response.json();
    const flattenAttributesData = flattenAttributes(data.data);
    return flattenAttributesData;
  } catch (error) {
    console.log(error);
  }
}

export async function updateContactById(id: string, updates: ContactMutation) {
  try {
    const response = await fetch(url + "/api/contacts/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: { ...updates } }),
    });
    const responseData = await response.json();
    const flattenAttributesData = flattenAttributes(responseData.data);
    return flattenAttributesData;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteContact(id: string) {
  try {
    const response = await fetch(url + "/api/contacts/" + id, {
      method: "DELETE",
    });
    const data = await response.json();
    const flattenAttributesData = flattenAttributes(data.data);
    return flattenAttributesData;
  } catch (error) {
    console.log(error);
  }
}
