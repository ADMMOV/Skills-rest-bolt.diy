import { motion } from 'framer-motion';
import { ChefHat, Mail, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { useUserStore } from '@/stores/userStore';

const GoogleIcon = () => <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C42.021,35.596,44,30.138,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>;
const FacebookIcon = () => <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22,12c0-5.52-4.48-10-10-10S2,6.48,2,12c0,4.84,3.44,8.87,8,9.8V15H8v-3h2V9.5C10,7.57,11.57,6,13.5,6H16v3h-1.5 c-1,0-1.5,0.5-1.5,1.5V12h3l-0.5,3h-2.5v6.8C18.56,20.87,22,16.84,22,12z"></path></svg>;

const LoginPage = () => {
  const navigate = useNavigate();
  const login = useUserStore(state => state.login);

  const handleSocialLogin = (provider: string) => {
    login({ id: 'user-123', email: `user@${provider.toLowerCase()}.com`, name: 'Alex Doe' });
    navigate('/onboarding/select-role');
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md space-y-8"
      >
        <div className="text-center">
          <ChefHat className="mx-auto h-12 w-12 text-secondary" />
          <h1 className="mt-4 text-4xl tracking-wider text-foreground">
            Get Connected
          </h1>
          <p className="mt-2 text-muted-foreground">
            Sign in or create an account to get started.
          </p>
        </div>

        <div className="space-y-4">
          <Button size="lg" className="w-full gap-3 bg-white text-black hover:bg-gray-200 shadow-none" onClick={() => handleSocialLogin('Google')}>
            <GoogleIcon /> Continue with Google
          </Button>
          <Button size="lg" className="w-full gap-3 bg-[#1877F2] text-white hover:bg-[#166eeb] shadow-none" onClick={() => handleSocialLogin('Facebook')}>
            <FacebookIcon /> Continue with Facebook
          </Button>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or
            </span>
          </div>
        </div>

        <div className="space-y-4">
           <Button size="lg" variant="secondary" className="w-full gap-3" onClick={() => handleSocialLogin('Email')}>
            <Mail className="h-5 w-5" /> Continue with Email
          </Button>
          <Button size="lg" variant="outline" className="w-full gap-3" onClick={() => handleSocialLogin('SignUp')}>
            <UserPlus className="h-5 w-5" /> Sign Up
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;
