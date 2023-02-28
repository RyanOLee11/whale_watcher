const { expect } = require("chai");

describe("ETH to USD Consumer V3", function () {

    it("Should get price greater than 0", async function () {
        // Contracts are deployed using the first signer/account by default
        const [owner, otherAccount] = await ethers.getSigners();

        const PriceFeed = await ethers.getContractFactory("MockEthUsdConsumerV3");
        const pricefeed = await PriceFeed.deploy();

        expect(await  pricefeed.getLatestPrice()).to.equal(1);
    })
});