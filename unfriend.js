let stopUnfriending = false;

function unfriendPeople() {
  // Find all the dot buttons
  const dotButtons = document.querySelectorAll('div[aria-label="Friends"][role="button"]');

  if (dotButtons.length === 0) {
    console.log('No dot buttons found');
    return;
  }

  // Function to click the dot button, then the unfriend button, and finally the confirm button
  function clickDotButton(dotButton, index) {
    setTimeout(() => {
      if (stopUnfriending) {
        console.log('Unfriending operation stopped');
        return;
      }

      dotButton.click();
      console.log(`Clicked dot button ${index + 1}`);

      // Wait for the unfriend button to appear
      setTimeout(() => {
        if (stopUnfriending) {
          console.log('Unfriending operation stopped');
          return;
        }

        const unfriendButton = Array.from(document.querySelectorAll('div[role="menuitem"] span[dir="auto"]'))
          .find(button => button.textContent === 'Unfriend');

        if (unfriendButton) {
          unfriendButton.click();
          console.log(`Clicked unfriend button ${index + 1}`);

          // Wait for the confirmation dialog to appear
          setTimeout(() => {
            if (stopUnfriending) {
              console.log('Unfriending operation stopped');
              return;
            }

            const confirmButton = Array.from(document.querySelectorAll('div[role="dialog"] div[role="button"] span[dir="auto"]'))
              .find(button => button.textContent.includes('Confirm'));

            if (confirmButton) {
              confirmButton.click();
              console.log(`Confirmed unfriend for person ${index + 1}`);
            } else {
              console.log('Confirmation button not found');
            }
          }, 1000); // Adjust the delay (in milliseconds) if needed
        } else {
          console.log('Unfriend button not found');
        }
      }, 1000); // Adjust the delay (in milliseconds) if needed
    }, index * 3000); // Delay between each action to mimic human behavior
  }

  // Loop through each dot button and click it
  dotButtons.forEach((dotButton, index) => {
    clickDotButton(dotButton, index);
  });
}

// Run the unfriendPeople function
unfriendPeople();