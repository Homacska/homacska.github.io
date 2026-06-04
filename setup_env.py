# Python Virtual Environment Setup Script
# Run this to set up the Python environment for the Quarto project

import subprocess
import sys
import os
from pathlib import Path

def run_command(cmd, description):
    """Run a shell command and handle errors."""
    print(f"\n{'='*60}")
    print(f"📦 {description}")
    print(f"{'='*60}")
    try:
        subprocess.run(cmd, shell=True, check=True)
        print(f"✅ {description} completed successfully")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Error during {description}: {e}")
        return False

def main():
    """Main setup function."""
    print("\n🚀 Setting up Python environment for Quarto website...\n")
    
    # Detect OS
    is_windows = sys.platform.startswith('win')
    venv_dir = Path("venv")
    
    # Create virtual environment
    if not venv_dir.exists():
        if run_command(
            f"{sys.executable} -m venv venv",
            "Creating Python virtual environment"
        ):
            # Activate venv and install packages
            if is_windows:
                activate_cmd = "venv\\Scripts\\activate"
                pip_cmd = "venv\\Scripts\\pip"
            else:
                activate_cmd = "source venv/bin/activate"
                pip_cmd = "venv/bin/pip"
            
            # Install requirements
            if run_command(
                f"{pip_cmd} install --upgrade pip",
                "Upgrading pip"
            ):
                if run_command(
                    f"{pip_cmd} install -r requirements.txt",
                    "Installing Python packages"
                ):
                    print("\n" + "="*60)
                    print("✨ Setup complete!")
                    print("="*60)
                    print(f"\nTo activate your environment, run:")
                    if is_windows:
                        print("  venv\\Scripts\\activate")
                    else:
                        print("  source venv/bin/activate")
                    print("\nThen you can use Quarto with Python:")
                    print("  quarto preview")
                else:
                    print("\n❌ Failed to install requirements")
                    sys.exit(1)
        else:
            print("\n❌ Failed to create virtual environment")
            sys.exit(1)
    else:
        print("✅ Virtual environment already exists at ./venv")
        print("\nTo activate it, run:")
        if is_windows:
            print("  venv\\Scripts\\activate")
        else:
            print("  source venv/bin/activate")

if __name__ == "__main__":
    main()
