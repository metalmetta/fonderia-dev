import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, X } from "lucide-react";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const AuthModal = ({ open, onOpenChange }: AuthModalProps) => {
  const handleAuthClick = (provider: string) => {
    // Frontend only - no actual authentication
    console.log(`Auth with ${provider} clicked (UI only)`);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className="sm:max-w-md bg-iron border-iron-light"
        aria-describedby="auth-modal-description"
      >
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif text-center">
            Enter the Forge
          </DialogTitle>
          <DialogDescription id="auth-modal-description" className="text-center text-ash">
            UI only — no sign-in yet.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-3 pt-4">
          <Button
            variant="secondary"
            size="lg"
            className="w-full justify-start gap-3 hover:bg-iron-light"
            onClick={() => handleAuthClick("email")}
            disabled
          >
            <Mail className="w-5 h-5" />
            Continue with Email
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="w-full justify-start gap-3 hover:bg-iron-light"
            onClick={() => handleAuthClick("github")}
            disabled
          >
            <Github className="w-5 h-5" />
            Continue with GitHub
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="w-full justify-start gap-3 hover:bg-iron-light"
            onClick={() => handleAuthClick("x")}
            disabled
          >
            <Twitter className="w-5 h-5" />
            Continue with X
          </Button>
        </div>

        <p className="text-xs text-center text-ash-dark mt-6">
          This is a preview modal. Authentication will be implemented later.
        </p>
      </DialogContent>
    </Dialog>
  );
};
