import { selector } from "recoil";

export const userSelector = selector({
  key: "userSelector",
  get: async () => {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("No token");

    const response = await fetch("/api/v1/user/me", {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!response.ok) throw new Error("Invalid token");

    const res = await response.json();
    
    // API returns: { status, message, data: { user: { ... } } }
    if (!res?.data?.user) throw new Error("Invalid response format");

    return res.data.user; // return only user object
  },
});
