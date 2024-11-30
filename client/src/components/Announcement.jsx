import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  overflow: hidden; /* Hide the content outside the container */
  position: relative; /* Set relative positioning for the container */
  width: 100%; /* Ensure container takes up full width */
`;

const Text = styled.div`
  white-space: nowrap; /* Prevent text wrapping */
  position: absolute; /* Absolute positioning for smooth animation */
  animation: scrollRightToLeft 10s linear infinite; /* Define the animation */

  @keyframes scrollRightToLeft {
    0% {
      transform: translateX(100%); /* Start off-screen from the right */
    }
    100% {
      transform: translateX(-100%); /* End off-screen to the left */
    }
  }
`;

const Announcement = () => {
  return (
    <Container>
      <Text>Super Deal! Free Shipping on Orders Over ₹2000</Text>
    </Container>
  );
};

export default Announcement;
