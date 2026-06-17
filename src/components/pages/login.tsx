import { Button } from '@/components/ds/button';
import { Text } from '@/components/ds/text';
import FacebookIcon from '@/components/icons/facebook';
import GoogleIcon from '@/components/icons/google';
import { FormLogin } from '@/components/pages/(components)/formLogin';
import Header from '@/components/pages/(components)/header';

export default function Login() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-zinc-800">
      <div className="h-full w-full max-w-sm bg-white p-7">
        <Header />
        <FormLogin />
        <div className="mt-4 flex items-center justify-center gap-2">
          <Button
            type="button"
            variant="social"
            size="social"
            label="Google"
            icon={<GoogleIcon className="size-6 shrink-0" />}
          >
            Google
          </Button>
          <Button
            type="button"
            variant="social"
            size="social"
            label="Github"
            icon={<FacebookIcon className="size-6 shrink-0" />}
          >
            Github
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-1">
          <Text as="span" tone="gray" weight="regular" size="p2">
            Não tem uma conta?
          </Text>

          <a href="/register">
            <Text as="span" tone="black" weight="regular" size="p2">
              Registre-se
            </Text>
          </a>
        </div>
      </div>
    </div>
  );
}
