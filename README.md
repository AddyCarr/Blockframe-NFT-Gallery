## 📦 Blockframe

View and mint NFT's Easily.  
Share your gallery by loading your address! 🎨  
See a live version of the site here: https://blockframe.vercel.app/

### 🔧 Installation

Run `npm install` in the terminal to install dependencies.

```bash
npm install
```

Rename `.env.example.local` to `.env.local` and add your values:

```bash
// .env.local
MORALIS_API_KEY=key_goes_here
BASE_URL=http://localhost:3000
ALCHEMY_API_KEY=key_goes_here
```

## Run

Run `npm run dev` in the terminal to start the server.

```bash
npm run dev
```

### 💅 Using Prettier

To format the code using Prettier, run the following command in the terminal:

```bash
npx prettier --write .
```

👍 That's it! You're now ready to use Blockframe! Don't forget to share your gallery by loading your address. Happy creating! 🚀


### TO-DO:
    - Add basic mint functionality
        - Finish and deploy basic sol minting contract incl. calls for: name, description and URI.
        - Create basic frontend mint page with fields for above info
        - Integrate front/back end using ethers
    - Style the share-link bgit 