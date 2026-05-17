type OAuthLoginInput = {
  provider: string;
  providerAccountId: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

type OAuthLoginResponse = {
  id: string;
  name?: string;
  email?: string;
  role?: string;
};

export async function oauthLogin(
  input: OAuthLoginInput
): Promise<OAuthLoginResponse> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/oauth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!response.ok) {
    throw new Error("Failed to authenticate user with backend");
  }

  return response.json();
}