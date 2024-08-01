import React, { useState } from "react";
import { getFirstCharacterUser } from "../../../../../untils/index";
import SearchIcon from '@mui/icons-material/Search';

function ListConversation(props) {
  const { conversationList, onConversationClick } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredConversations = conversationList.filter((conversation) =>
    conversation.nameConversation
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="contact-list-container">
      <div className="search-input-container">
        <SearchIcon className="search-icon" />
        <input
          type="text"
          placeholder="Search conversations..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="contact-list-search"
        />
      </div>
      <div className="contact-list">
        {filteredConversations.map((conversation) => (
          <div
            key={conversation.id}
            className="contact-list-item"
            onClick={() => onConversationClick(conversation)}
          >
            <div className="contact-list-item-avarta">
              {getFirstCharacterUser(conversation.nameConversation)}
            </div>
            <div className="contact-list-item-content">
              <p className="contact-list-item-name">
                {conversation.nameConversation}
              </p>
              <span className="contact-list-item-lastmessage">
                {" "}
                {conversation.lastMessage}{" "}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListConversation;
