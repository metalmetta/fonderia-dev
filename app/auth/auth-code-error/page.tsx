export default function AuthCodeErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-serif font-bold mb-4">Authentication Error</h1>
        <p className="text-lg text-ash mb-8">
          Sorry, we couldn't complete your authentication. Please try again.
        </p>
        <a 
          href="/" 
          className="inline-block px-6 py-3 bg-ember-start text-charcoal font-semibold rounded-md hover:bg-ember-end transition-colors"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}

