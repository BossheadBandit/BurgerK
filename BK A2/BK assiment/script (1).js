// Setting Background Color
document.body.style.backgroundColor = "#f5ebdc";

// Function to create colored div at the bottom of the page
function createBottomBackgroundColor(color) {
    // Creating a new div element
    let bottomColorDiv = document.createElement("div");
    // Setting position to absolute
    bottomColorDiv.style.position = "absolute";
    // Placing the div at the bottom of the page with negative bottom offset
    bottomColorDiv.style.bottom = "-1080px";
    // Setting left to 0 to align with the left edge of the page
    bottomColorDiv.style.left = "0";
    // Making the div span the entire width of the page
    bottomColorDiv.style.width = "100%";
    // Setting the height of the div
    bottomColorDiv.style.height = "500px";
    // Setting the background color
    bottomColorDiv.style.backgroundColor = color;
    // Appending the div to the body of the document
    document.body.appendChild(bottomColorDiv);
}

// Creating colored divs at the bottom with different colors
createBottomBackgroundColor("#efe1cc");

// Function to create container with image, text, and buttons
function createImageWithTextAndButtons(src, mainText, subText, buttonText, position, offsetX, offsetY) {
    // Creating container for image and text
    let imageContainer = document.createElement("div");
    // Setting position to absolute
    imageContainer.style.position = "absolute";
    // Setting text alignment to center
    imageContainer.style.textAlign = "center";
    // Calculating top position with dynamic offset
    imageContainer.style.top = `calc(50% + ${offsetY}px)`;
    // Calculating left position with dynamic offset
    imageContainer.style.left = `calc(50% + ${offsetX}px)`;
    // Centering the container horizontally and vertically
    imageContainer.style.transform = "translate(-50%, -50%)";

    // Creating image element
    let image = document.createElement("img");
    // Setting image source
    image.src = src;
    // Setting image dimensions
    image.style.height = "290px";
    image.style.width = "550px";
    // Adding border radius to image corners
    image.style.borderTopLeftRadius = '10px';
    image.style.borderTopRightRadius = '10px';
    // Appending image to image container
    imageContainer.appendChild(image);

    // Creating container for text
    let textContainer = document.createElement("div");
    // Setting position to relative
    textContainer.style.position = "relative";
    // Setting width of text container
    textContainer.style.width = "550px";
    // Setting background color of text container
    textContainer.style.backgroundColor = "white";
    // Setting text color
    textContainer.style.color = "#502314";
    // Setting border of text container
    textContainer.style.border = "2px solid white";
    // Adding rounded corners to bottom of text container
    textContainer.style.borderBottomLeftRadius = "15px";
    textContainer.style.borderBottomRightRadius = "15px";
    // Removing padding from text container
    textContainer.style.padding = "0px";
    // Aligning text to the left
    textContainer.style.textAlign = "left";
    // Adjusting margin to maintain position relative to image
    textContainer.style.marginTop = "-5px";
    // Adding padding at bottom to accommodate buttons
    textContainer.style.paddingBottom = "55px";

    // Creating main text element
    let mainTextElement = document.createElement("div");
    // Setting text content
    mainTextElement.textContent = mainText;
    // Setting height of main text element
    mainTextElement.style.height = "30px";
    // Setting font size of main text
    mainTextElement.style.fontSize = "larger";

    // Creating subtext element
    let subTextElement = document.createElement("div");
    // Setting inner HTML for subtext, including line breaks
    subTextElement.innerHTML = subText.replace(/\n/g, "<br/>");
    // Setting font size of subtext
    subTextElement.style.fontSize = "smaller";
    // Adding margin to top of subtext
    subTextElement.style.marginTop = "5px";
    // Allowing wrapping of text
    subTextElement.style.whiteSpace = "normal";

    // Appending main and subtext elements to text container
    textContainer.appendChild(mainTextElement);
    textContainer.appendChild(subTextElement);

    // Appending text container to image container
    imageContainer.appendChild(textContainer);

    // Creating container for buttons
    let buttonsContainer = document.createElement("div");
    // Setting position to absolute
    buttonsContainer.style.position = "absolute";
    // Setting top position for buttons container
    buttonsContainer.style.top = "50%";
    // Setting right position for buttons container
    buttonsContainer.style.right = "10px";
    // Vertically centering buttons container
    buttonsContainer.style.transform = "translateY(-50%)";

    // Creating button element
    let button = document.createElement("button");
    // Setting button text
    button.textContent = buttonText;
    // Setting padding for button
    button.style.padding = "10px 20px";
    // Adding top margin to button
    button.style.marginTop = "10px";
    // Setting background color of button
    button.style.backgroundColor = "#d62300";
    // Setting text color of button
    button.style.color = "white";
    // Removing border from button
    button.style.border = "none";
    // Adding border radius to button
    button.style.borderRadius = "35px";
    // Setting cursor to pointer for button
    button.style.cursor = "pointer";
    // Setting font size of button text
    button.style.fontSize = "larger";

    // Styling button based on position
    if (position === "top-left") {
        // Assigning ID to button
        button.id = "getRewardedButton";
        // Changing button background color
        button.style.backgroundColor = "white";
        // Changing button text color
        button.style.color = "#d62300";
        // Adding border to button
        button.style.border = "2px solid #d62300";
        // Adjusting top position of buttons container
        buttonsContainer.style.top = "50%";
    }

    // Appending button to buttons container
    buttonsContainer.appendChild(button);
    // Appending buttons container to text container
    textContainer.appendChild(buttonsContainer);

    // Positioning text container based on position parameter
    switch (position) {
        case "top-left":
            textContainer.style.top = "0";
            textContainer.style.left = "0";
            break;
        case "top-right":
            textContainer.style.top = "0";
            textContainer.style.right = "0";
            break;
        case "bottom-left":
            textContainer.style.bottom = "0";
            textContainer.style.left = "0";
            break;
        case "bottom-right":
            textContainer.style.bottom = "0";
            textContainer.style.right = "0";
            break;
        default:
            break;
    }

    // Appending image container to body
    document.body.appendChild(imageContainer);
}

// Creating image with text and buttons at various positions
createImageWithTextAndButtons("freewhop.jpeg", "YourBurgerKing", "Earn points and get rewarded with every order on the BK App.", "Get Rewared", "top-left", -320, 70);
createImageWithTextAndButtons("bkdel.JPEG", "BK® Delivers, powered by Deliveroo®", "Get your flame-grilled favourites straight to your door today!", "Order Now", "top-right", 255, 70);
createImageWithTextAndButtons("bkpep.JPEG", "Peppercorn Gourmet Kings", "150g of Aberdeen Angus or Crispy Chicken with a \nclassic Peppercorn mayo", "Discover the range", "bottom-left", -320, 490);
createImageWithTextAndButtons("bktangche.JPEG", "NEW Doritos Tangy Cheese Chicken Fries", "Chicken Fries, but make it Tangy.Get your hands on this tasty \ncollaboration!", "Order Now", "bottom-right", 255, 490);

// Function to create image without text
function createImageWithoutText(src, position, offsetX, offsetY) {
    // Creating container for image
    let imageContainer = document.createElement("div");
    // Setting position to absolute
    imageContainer.style.position = "absolute";

    // Positioning image container based on position parameter
    switch (position) {
        case "top":
            imageContainer.style.top = `${offsetY}px`;
            break;
        case "middle":
            imageContainer.style.top = `calc(50% + ${offsetY}px)`;
            break;
        case "bottom":
            imageContainer.style.bottom = `${offsetY}px`;
            break;
        default:
            break;
    }

    // Setting right position for image container
    imageContainer.style.right = `${offsetX}px`;

    // Creating image element
    let image = document.createElement("img");
    // Setting image source
    image.src = src;
    // Setting image dimensions
    image.style.height = "680px";
    image.style.width = "420px";
    // Adding border radius to image corners
    image.style.borderTopLeftRadius = '10px';
    image.style.borderTopRightRadius = '10px';

    // Appending image to image container
    imageContainer.appendChild(image);

    // Appending image container to body
    document.body.appendChild(imageContainer);

    // Adding text element
    let textElement = document.createElement("div");
    // Setting text content
    textElement.textContent = "Save £££\nWith offers on\n demand";
    // Setting position to absolute
    textElement.style.position = "absolute";
    // Setting top position for text element
    textElement.style.top = `1500px`;
    // Setting right position for text element
    textElement.style.right = `150px`;
    // Centering text vertically
    textElement.style.transform = "translateY(-50%)";
    // Setting font size of text
    textElement.style.fontSize = "60px";
    // Setting text color
    textElement.style.color = "#502314";
    // Allowing text to wrap
    textElement.style.whiteSpace = "pre-line";
    // Setting font weight to bold
    textElement.style.fontWeight = "bold";

    // Appending text element to body
    document.body.appendChild(textElement);
}

// Creating image without text
createImageWithoutText("bkPhone.jpeg", "middle", 550, 800);

// Function to add images and text below
function addNewImageBelowText() {
    // Creating App Store image
    let appStoreImage = document.createElement("img");
    // Setting image source
    appStoreImage.src = "appSt.png";
    // Setting position to absolute
    appStoreImage.style.position = "absolute";
    // Setting top position for App Store image
    appStoreImage.style.top = "1650px";
    // Setting right position for App Store image
    appStoreImage.style.right = "350px";
    // Setting height of App Store image
    appStoreImage.style.height = "40px";
    // Setting width of App Store image
    appStoreImage.style.width = "140px";
    // Appending App Store image to body
    document.body.appendChild(appStoreImage);

    // Creating Google Play image
    let googlePlayImage = document.createElement("img");
    // Setting image source
    googlePlayImage.src = "google.jpeg";
    // Setting position to absolute
    googlePlayImage.style.position = "absolute";
    // Setting top position for Google Play image
    googlePlayImage.style.top = "1650px";
    // Setting right position for Google Play image
    googlePlayImage.style.right = "170px";
    // Setting height of Google Play image
    googlePlayImage.style.height = "40px";
    // Setting width of Google Play image
    googlePlayImage.style.width = "140px";
    // Appending Google Play image to body
    document.body.appendChild(googlePlayImage);

    // Creating trademark text
    let trademarkText = document.createElement("div");
    // Setting text content
    trademarkText.textContent = "Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S.\n and other countries. App Store is a service mark of Apple Inc. Google Play is a\n trademark of Google Inc. Terms apply.";
    // Setting position to absolute
    trademarkText.style.position = "absolute";
    // Setting top position for trademark text
    trademarkText.style.top = "1720px";
    // Setting right position for trademark text
    trademarkText.style.right = "100px";
    // Setting font size of trademark text
    trademarkText.style.fontSize = "13px";
    // Setting text color
    trademarkText.style.color = "#502314";
    // Allowing text to wrap
    trademarkText.style.whiteSpace = "pre-line";

    // Appending trademark text to body
    document.body.appendChild(trademarkText);
}

// Adding images and text below other content
addNewImageBelowText();

// Function to create info list
function createInfoList() {
    // Creating container for info list
    let infoContainer = document.createElement("div");
    // Setting position to absolute
    infoContainer.style.position = "absolute";
    // Setting bottom position for info list container
    infoContainer.style.bottom = "-1430px";
    // Setting left position for info list container
    infoContainer.style.left = "150px";

    // Creating title for info list
    let title = document.createElement("h2");
    // Setting title text content
    title.textContent = "BK INFO";
    // Setting font size for title
    title.style.fontSize = "24px";
    // Adding margin bottom to title
    title.style.marginBottom = "10px";
    // Setting text color for title
    title.style.color = "white";

    // Appending title to info container
    infoContainer.appendChild(title);

    // Creating unordered list for info items
    let infoList = document.createElement("ul");
    // Setting list style type to none
    infoList.style.listStyleType = "none";

    // Array of info items
    let items = ["About BK ®", "FAQs", "Policies", "Get in touch", "Terms & Conditions", "Guest TracLink opens in new tab", "Trademarks"];

    // Iterating through each item
    items.forEach(item => {
        // Creating list item for each info item
        let listItem = document.createElement("li");
        // Setting text content for list item
        listItem.textContent = item;
        // Setting font size for list item
        listItem.style.fontSize = "16px";
        // Adding margin bottom to list item
        listItem.style.marginBottom = "5px";
        // Adjusting left margin to create indentation
        listItem.style.marginLeft = "-40px";
        // Setting text color for list item
        listItem.style.color = "white";
        // Appending list item to info list
        infoList.appendChild(listItem);
    });

    // Appending info list to info container
    infoContainer.appendChild(infoList);

    // Appending info container to body
    document.body.appendChild(infoContainer);
}

// Creating info list
createInfoList();

// Function to create second info list
function createSecondInfoList() {
    // Creating container for second info list
    let secondInfoContainer = document.createElement("div");
    // Setting position to absolute
    secondInfoContainer.style.position = "absolute";
    // Setting bottom position for second info list container
    secondInfoContainer.style.bottom = "-1360px";
    // Setting right position for second info list container
    secondInfoContainer.style.right = "540px";

    // Creating title for second info list
    let secondTitle = document.createElement("h2");
    // Setting title text content
    secondTitle.textContent = "BK® AND YOU";
    // Setting font size for title
    secondTitle.style.fontSize = "24px";
    // Adding margin bottom to title
    secondTitle.style.marginBottom = "10px";
    // Setting text color for title
    secondTitle.style.color = "white";

    // Appending title to second info container
    secondInfoContainer.appendChild(secondTitle);

    // Creating unordered list for second info items
    let secondInfoList = document.createElement("ul");
    // Setting list style type to none
    secondInfoList.style.listStyleType = "none";

    // Array of second info items
    let secondItems = ["Careers", "Privacy Policy", "Modern Slavery Statement", "Tax Strategy"];

    // Iterating through each item
    secondItems.forEach(item => {
        // Creating list item for each second info item
        let listItem = document.createElement("li");
        // Setting text content for list item
        listItem.textContent = item;
        // Setting font size for list item
        listItem.style.fontSize = "16px";
        // Adding margin bottom to list item
        listItem.style.marginBottom = "5px";
        // Adjusting left margin to create indentation
        listItem.style.marginLeft = "-40px";
        // Setting text color for list item
        listItem.style.color = "white";
        // Appending list item to second info list
        secondInfoList.appendChild(listItem);
    });

    // Appending second info list to second info container
    secondInfoContainer.appendChild(secondInfoList);

    // Appending second info container to body
    document.body.appendChild(secondInfoContainer);
}

// Creating second info list
createSecondInfoList();

// Function to create new bottom background color
function createNewBottomBackgroundColor(color, height, distanceFromBottom) {
    // Creating container for new bottom background color
    let NewbottomColorDiv = document.createElement("div");
    // Setting position to absolute
    NewbottomColorDiv.style.position = "absolute";
    // Setting width of container to fill entire page
    NewbottomColorDiv.style.width = "100%";
    // Setting height of container
    NewbottomColorDiv.style.height = height + "px";
    // Setting background color
    NewbottomColorDiv.style.backgroundColor = color;
    // Setting bottom distance from bottom of page
    NewbottomColorDiv.style.bottom = distanceFromBottom + "px";
    // Setting z-index to ensure it stays at the bottom
    NewbottomColorDiv.style.zIndex = "-1";

    // Appending container to body
    document.body.appendChild(NewbottomColorDiv);
}

// Creating new bottom background color
createNewBottomBackgroundColor("#502314", 618, -1700);

// Function to create third info list
function createThirdInfoList() {
    // Creating container for third info list
    let thirdInfoContainer = document.createElement("div");
    // Setting position to absolute
    thirdInfoContainer.style.position = "absolute";
    // Setting bottom position for third info list container
    thirdInfoContainer.style.bottom = "-1580px";
    // Setting left position for third info list container
    thirdInfoContainer.style.left = "150px";

    // Creating title for third info list
    let thirdTitle = document.createElement("h2");
    // Setting title text content
    thirdTitle.textContent = "Burger King";
    // Setting font size for title
    thirdTitle.style.fontSize = "28px";
    // Adding margin bottom to title
    thirdTitle.style.marginBottom = "10px";
    // Setting text color for title
    thirdTitle.style.color = "white";

    // Appending title to third info container
    thirdInfoContainer.appendChild(thirdTitle);

    // Creating unordered list for third info items
    let thirdInfoList = document.createElement("ul");
    // Setting list style type to none
    thirdInfoList.style.listStyleType = "none";

    // Array of third info items
    let thirdItems = ["TM & Copyright 2021 Burger King Corporation.All Rights Reserved. "
    ];

    // Iterating through each item
    thirdItems.forEach(item => {
        // Creating list item for each third info item
        let listItem = document.createElement("li");
        // Setting text content for list item
        listItem.textContent = item;
        // Setting font size for list item
        listItem.style.fontSize = "14px";
        // Adding margin bottom to list item
        listItem.style.marginBottom = "5px";
        // Adjusting left margin to create indentation
        listItem.style.marginLeft = "-40px";
        // Setting text color for list item
        listItem.style.color = "white";
        // Appending list item to third info list
        thirdInfoList.appendChild(listItem);
    });

    // Appending third info list to third info container
    thirdInfoContainer.appendChild(thirdInfoList);

    // Appending third info container to body
    document.body.appendChild(thirdInfoContainer);
}

// Creating third info list
createThirdInfoList();
// Function to create white lines
function createWhiteLines() {
    // Creating white line above
    let whiteLineAbove = document.createElement("div");
    // Setting position to absolute
    whiteLineAbove.style.position = "absolute";
    // Setting width of white line
    whiteLineAbove.style.width = "80%";
    // Setting height of white line
    whiteLineAbove.style.height = "1px";
    // Setting background color to white
    whiteLineAbove.style.backgroundColor = "white";
    // Setting top position for white line
    whiteLineAbove.style.top = "2340px";
    // Setting left position for white line
    whiteLineAbove.style.left = "150px";

    // Creating white line below
    let whiteLineBelow = document.createElement("div");
    // Setting position to absolute
    whiteLineBelow.style.position = "absolute";
    // Setting width of white line
    whiteLineBelow.style.width = "80%";
    // Setting height of white line
    whiteLineBelow.style.height = "1px";
    // Setting background color to white
    whiteLineBelow.style.backgroundColor = "white";
    // Setting top position for white line
    whiteLineBelow.style.top = "2160px";
    // Setting left position for white line
    whiteLineBelow.style.left = "150px";

    // Appending white lines to body
    document.body.appendChild(whiteLineAbove);
    document.body.appendChild(whiteLineBelow);
}

// Creating white lines
createWhiteLines();

// Function to add social media icons
function addSocialImage(src) {
    // Creating container for social media icons
    let imageContainer = document.createElement("div");
    // Setting position to absolute
    imageContainer.style.position = "absolute";
    // Setting top position for social media icons
    imageContainer.style.top = "2220px";
    // Setting right position for social media icons
    imageContainer.style.right = "170px";

    // Creating image element for social media icon
    let image = document.createElement("img");
    // Setting image source
    image.src = src;
    // Setting height of social media icon
    image.style.height = "30px";
    // Setting width of social media icon
    image.style.width = "130px";

    // Appending image to image container
    imageContainer.appendChild(image);

    // Appending image container to body
    document.body.appendChild(imageContainer);
}

// Adding social media icons
addSocialImage("footer-social-sprite.png");
