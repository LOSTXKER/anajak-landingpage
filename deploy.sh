#!/bin/bash

# 🚀 Anajak T-Shirt - Quick Deploy Script
# ========================================

echo "╔════════════════════════════════════════════════════════════╗"
echo "║     🚀 Anajak T-Shirt - Deployment Helper                ║"
echo "╚════════════════════════════════════════════════════════════╝"
echo ""

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# ========================================
# Step 1: Git Status
# ========================================
echo -e "${BLUE}📊 Checking Git status...${NC}"
git status --short

echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Step 1: Push to GitHub${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "ℹ️  GitHub repository:"
echo "   https://github.com/LOSTXKER/anajaktshirt-landingpage"
echo ""
echo "⚠️  Git push requires authentication!"
echo ""
echo "Please choose a method:"
echo ""
echo "  [1] 🖱️  Use GitHub Desktop (Easiest - Recommended!)"
echo "       Download: https://desktop.github.com/"
echo ""
echo "  [2] 🔑 Use Personal Access Token"
echo "       Create token: https://github.com/settings/tokens"
echo "       Then run: git push https://TOKEN@github.com/LOSTXKER/anajaktshirt-landingpage.git main"
echo ""
echo "  [3] 🔐 Setup SSH Key (Advanced)"
echo "       Guide: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
echo ""
read -p "Enter your choice (1/2/3) or 's' to skip: " git_choice
echo ""

case $git_choice in
  1)
    echo -e "${GREEN}✅ Opening GitHub Desktop download page...${NC}"
    open "https://desktop.github.com/" 2>/dev/null || echo "Please visit: https://desktop.github.com/"
    echo ""
    echo "After installing GitHub Desktop:"
    echo "  1. Sign in with GitHub"
    echo "  2. File → Add Local Repository"
    echo "  3. Select: $(pwd)"
    echo "  4. Publish repository"
    echo ""
    read -p "Press Enter when done pushing to GitHub..."
    ;;
  2)
    echo -e "${YELLOW}📝 Enter your Personal Access Token:${NC}"
    echo "(Create at: https://github.com/settings/tokens)"
    read -sp "Token: " github_token
    echo ""
    if [ ! -z "$github_token" ]; then
      echo -e "${BLUE}🚀 Pushing to GitHub...${NC}"
      git push https://$github_token@github.com/LOSTXKER/anajaktshirt-landingpage.git main
      if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Successfully pushed to GitHub!${NC}"
      else
        echo -e "${RED}❌ Failed to push. Please check your token and try again.${NC}"
        exit 1
      fi
    else
      echo -e "${RED}❌ No token provided. Skipping...${NC}"
    fi
    ;;
  3)
    echo -e "${YELLOW}📖 Opening SSH setup guide...${NC}"
    open "https://docs.github.com/en/authentication/connecting-to-github-with-ssh" 2>/dev/null || \
      echo "Visit: https://docs.github.com/en/authentication/connecting-to-github-with-ssh"
    echo ""
    echo "After setting up SSH, run:"
    echo "  git remote set-url origin git@github.com:LOSTXKER/anajaktshirt-landingpage.git"
    echo "  git push -u origin main"
    exit 0
    ;;
  s|S)
    echo -e "${YELLOW}⏭️  Skipping GitHub push...${NC}"
    ;;
  *)
    echo -e "${RED}❌ Invalid choice. Skipping...${NC}"
    ;;
esac

echo ""
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}Step 2: Deploy to Vercel${NC}"
echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo "Choose deployment method:"
echo ""
echo "  [1] 🌐 Use Vercel Dashboard (Easiest - Recommended!)"
echo "       Visit: https://vercel.com/new"
echo ""
echo "  [2] 💻 Use Vercel CLI"
echo "       Deploy from this folder"
echo ""
read -p "Enter your choice (1/2) or 's' to skip: " vercel_choice
echo ""

case $vercel_choice in
  1)
    echo -e "${GREEN}✅ Opening Vercel dashboard...${NC}"
    open "https://vercel.com/new" 2>/dev/null || echo "Please visit: https://vercel.com/new"
    echo ""
    echo "On Vercel Dashboard:"
    echo "  1. Sign in with GitHub"
    echo "  2. Import repository: LOSTXKER/anajaktshirt-landingpage"
    echo "  3. Click 'Deploy'"
    echo "  4. Wait 2-3 minutes"
    echo "  5. Done! 🎉"
    echo ""
    echo "Note: If repository not found, push to GitHub first!"
    ;;
  2)
    echo -e "${BLUE}🚀 Deploying with Vercel CLI...${NC}"
    echo ""
    
    # Check if logged in
    if ! npx vercel whoami &>/dev/null; then
      echo -e "${YELLOW}📝 Please login to Vercel...${NC}"
      npx vercel login
      if [ $? -ne 0 ]; then
        echo -e "${RED}❌ Login failed. Please try again.${NC}"
        exit 1
      fi
    fi
    
    echo ""
    echo -e "${BLUE}📦 Building and deploying...${NC}"
    npx vercel --prod
    
    if [ $? -eq 0 ]; then
      echo ""
      echo -e "${GREEN}✅ Successfully deployed to Vercel!${NC}"
      echo ""
      echo "🌐 Your website is now live!"
      echo ""
    else
      echo -e "${RED}❌ Deployment failed. Check the errors above.${NC}"
      exit 1
    fi
    ;;
  s|S)
    echo -e "${YELLOW}⏭️  Skipping Vercel deployment...${NC}"
    ;;
  *)
    echo -e "${RED}❌ Invalid choice. Skipping...${NC}"
    ;;
esac

echo ""
echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                  ✅ Deployment Complete!                  ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo ""
echo "📚 For more details, check:"
echo "   - GITHUB-DEPLOY.md"
echo "   - VERCEL-DEPLOY-STEPS.md"
echo ""
echo "🎉 Happy coding!"




