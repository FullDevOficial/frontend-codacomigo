import { SignInWithGithub } from './(components)/sign-in-with-github';

export default async function SignIn() {
  return (
    <div className="flex h-screen items-center justify-center bg-neutral-950 text-white">
      <SignInWithGithub />
    </div>
  );
}
