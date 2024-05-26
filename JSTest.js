// create a variable to hold your NFT's
const NFTs = []
function mintNFT (_name, _eyeColor, _shirtType, _bling) {
    const NFT = {
        "name": _name,
        "eyeColor": _eyeColor, // corrected here
        "shirtType": _shirtType,
        "bling": _bling

    }
    NFTs.push(NFT);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0; i<NFTs.length; i++){
        console.log("Name: " + NFTs[i].name);
        console.log("Eye Color: " + NFTs[i].eyeColor);
        console.log("Shirt Type: " + NFTs[i].shirtType);
        console.log("Bling: " + NFTs[i].bling);
        console.log("------------------------"); // added for better readability
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total Supply: " + NFTs.length);
}

// call your functions below this line
mintNFT("Gelo", "Green", "Polo", "Gold Chain");
listNFTs();
getTotalSupply();
