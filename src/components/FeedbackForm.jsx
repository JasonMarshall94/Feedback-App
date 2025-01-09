import { useState } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (e) => {
    const textValue = e.target.value;

    if (textValue === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (textValue.trim().length < 10) {
      setMessage("Your feedback must be at least 10 characters long");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(textValue);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>
        {/* Rating Select Component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
