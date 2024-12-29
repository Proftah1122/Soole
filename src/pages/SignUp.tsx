import { SignUpForm } from '../components/auth/SignUpForm';

const SignUpPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
};

export { SignUpPage };