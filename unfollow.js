let stopUnfollowing = false;

function unfollowPeople() {
  // Find all the "Manage" buttons
  const manageButtons = document.querySelectorAll('div[aria-label="Manage"][role="button"]');

  if (manageButtons.length === 0) {
    console.log('No manage buttons found');
    return;
  }

  // Function to click the manage button and then the unfollow button
  function clickManageButton(manageButton, index) {
    setTimeout(() => {
      if (stopUnfollowing) {
        console.log('Unfollowing operation stopped');
        return;
      }

      manageButton.click();
      console.log(`Clicked manage button ${index + 1}`);

      // Wait for the unfollow button to appear
      setTimeout(() => {
        if (stopUnfollowing) {
          console.log('Unfollowing operation stopped');
          return;
        }

        const unfollowButton = Array.from(document.querySelectorAll('div[role="menuitem"] span[dir="auto"]'))
          .find(button => button.textContent === 'Unfollow');
        
        if (unfollowButton) {
          unfollowButton.click();
          console.log(`Clicked unfollow button ${index + 1}`);
        } else {
          console.log('Unfollow button not found');
        }
      }, 1000); // Adjust the delay (in milliseconds) if needed
    }, index * 2000); // Delay between each action to mimic human behavior
  }

  // Loop through each manage button and click it
  manageButtons.forEach((manageButton, index) => {
    clickManageButton(manageButton, index);
  });
}

// Run the unfollowPeople function
unfollowPeople();