<template>
  <div class="chatbot">
    <transition-group name="route" appear v-if="isShow">
      <div class="modal" key="chatbot"></div>
      <div
        class="flex flex-col items-center content-center pop-up"
        key="chatbot"
      >
        <div class="leading-pop-up flex flex-col items-center content-center">
          <BaseIcon
            class="text-white"
            :width="'32'"
            :height="'33'"
            :iconStyle="'M16 31.167L12 27.167H6.66667C5.93333 27.167 5.30556 26.9059 4.78333 26.3837C4.26111 25.8614 4 25.2337 4 24.5003V5.83366C4 5.10033 4.26111 4.47255 4.78333 3.95033C5.30556 3.4281 5.93333 3.16699 6.66667 3.16699H25.3333C26.0667 3.16699 26.6944 3.4281 27.2167 3.95033C27.7389 4.47255 28 5.10033 28 5.83366V24.5003C28 25.2337 27.7389 25.8614 27.2167 26.3837C26.6944 26.9059 26.0667 27.167 25.3333 27.167H20L16 31.167ZM6.66667 24.5003H13.0667L16 27.4337L18.9333 24.5003H25.3333V5.83366H6.66667V24.5003ZM18.0667 17.2337L22.6667 15.167L18.0667 13.1003L16 8.50033L13.9333 13.1003L9.33333 15.167L13.9333 17.2337L16 21.8337L18.0667 17.2337Z'"
          />
          <div class="text-white ui-h3">Question</div>
        </div>
        <div class="questions flex flex-col items-center">
          <QuestionCard
            :text="'How to increase volume in Friends get Friend campaign?'"
            @questionAction="askChatBot"
          />
          <QuestionCard
            :text="'How to promote new campaigns related to beauty industry?'"
            @questionAction="askChatBot"
          />
        </div>
      </div>
    </transition-group>
    <div class="chatbot-container h-screen flex flex-col">
      <div class="header-chatbot flex items-center">
        <div
          class="bg-blue rounded-full flex flex-col items-center justify-center"
          style="width: 3.2rem; height: 3.2rem"
        >
          <img
            src="@/assets/images/icons/openai-white-logomark.png"
            alt="logo"
            style="width: 2.2rem; height: 2.2rem"
          />
        </div>
        <div class="ui-h2">Chat with AI Assistant</div>
      </div>
      <div class="chat-container">
        <div class="conversation">
          <div
            v-for="(message, index) in messages"
            :key="index"
            class="chat-message"
            :class="[message.isSent ? 'justify-end' : 'justify-start']"
          >
            <div
              class="profile-image flex flex-col items-center justify-center bg-blue"
              v-if="!message.isSent"
            >
              <img
                src="@/assets/images/icons/openai-white-logomark.png"
                alt="logo"
                style="width: 2.2rem; height: 2.2rem"
              />
            </div>
            <div
              :class="[
                message.isSent
                  ? 'sent-message user-chat ui-body-1-medium bg-blue text-white'
                  : 'received-message ui-body-2-regular bg-white text-grey',
              ]"
            >
              {{ message.text }}
            </div>
            <div class="profile-image" v-if="message.isSent">
              <img src="@/assets/images/sample_user.png" alt="Sent Profile" />
            </div>
          </div>
        </div>
        <div class="user-input">
          <input
            class="chat-input flex bg-white ui-body-2-regular text-black placeholder:text-grey focus:outline-none focus:ring focus:ring-blue focus:ring-2 transition duration-300 ease-in-out"
            placeholder="Send a message"
            v-model="newMessage"
          />
          <div
            class="button-send cursor-pointer"
            @click="
              newMessage.length != 0 && isEnabled == true
                ? askChatBotByType()
                : null
            "
          >
            <BaseIcon
              class="text-blue"
              :width="'24'"
              :height="'25'"
              :iconStyle="'M20.7825 3.73991C20.6813 3.63917 20.5534 3.56941 20.4139 3.53886C20.2744 3.5083 20.1291 3.5182 19.995 3.56741L3.495 9.56741C3.3527 9.62138 3.23019 9.71737 3.14374 9.84263C3.05729 9.96788 3.01099 10.1165 3.01099 10.2687C3.01099 10.4209 3.05729 10.5694 3.14374 10.6947C3.23019 10.8199 3.3527 10.9159 3.495 10.9699L9.9375 13.5424L14.6925 8.77241L15.75 9.82991L10.9725 14.6074L13.5525 21.0499C13.6081 21.1895 13.7043 21.3091 13.8286 21.3933C13.953 21.4776 14.0998 21.5226 14.25 21.5224C14.4016 21.5193 14.5486 21.4703 14.6718 21.382C14.795 21.2936 14.8885 21.17 14.94 21.0274L20.94 4.52741C20.9911 4.39472 21.0034 4.25023 20.9755 4.1108C20.9477 3.97137 20.8807 3.84274 20.7825 3.73991Z'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BaseIcon from "../components/Icons/BaseIcon.vue";
import QuestionCard from "../components/QuestionCard.vue";
export default {
  name: "ChatBotView",
  components: {
    BaseIcon,
    QuestionCard,
  },
  data() {
    return {
      isShow: true,
      isEnabled: true,
      messages: [],
      newMessage: "",
    };
  },
  methods: {
    scrollChatDown() {
      const container = document.querySelector(".conversation");
      container.scrollTop = container.scrollHeight;
    },
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({ text: this.newMessage, isSent: true });
        this.newMessage = "";
      }
    },
    async askChatBot(text) {
      this.isShow = false;
      this.newMessage = text;
      this.sendMessage();
      const BASE_URL = process.env.VUE_APP_API_PATH;
      const data = {
        question: text,
      };
      this.isEnabled = false;
      try {
        this.messages.push({
          text: "Typing...",
        });
        const response = await axios.post(BASE_URL, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        this.messages.pop();
        // .answer
        this.messages.push({text: response.data.answer});
        console.log(response.data.answer);
      } catch (error) {
        this.messages.pop();
        this.messages.push({
          text: "Hmm...something seems to have gone wrong. Mayber try me again in a little bit.",
        });
        console.error(error);
      }
      this.isEnabled = true;
    },
    async askChatBotByType() {
      const BASE_URL = process.env.VUE_APP_API_PATH;
      const data = {
        question: this.newMessage,
      };
      this.sendMessage();
      this.isEnabled = false;
      try {
        this.messages.push({
          text: "Typing...",
        });
        const response = await axios.post(BASE_URL, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        // .answer
        this.messages.pop();
        this.messages.push({text: response.data.answer});
        console.log(response.data.answer);
      } catch (error) {
        this.messages.pop();
        this.messages.push({
          text: "Hmm...something seems to have gone wrong. Mayber try me again in a little bit.",
        });
        console.error(error);
      }
      this.isEnabled = true;
      this.scrollChatDown();
    },
  },
};
</script>

<style lang="scss" scoped>
.chatbot {
  .modal {
    width: 100%;
    height: 100vh;
    position: fixed;
    background-color: rgba(24, 24, 26, 0.4);
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .pop-up {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
    z-index: 3;
    width: 100%;
    padding: 2.4rem;
    padding-left: 22.4rem;
    gap: 2.4rem;
    .leading-pop-up {
      gap: 0.9rem;
    }
    .questions {
      gap: 1.6rem;
    }
  }
  .chatbot-container {
    margin-left: 22.4rem;
    .header-chatbot {
      gap: 1.6rem;
      padding: 2.4rem 3.2rem;
      position: fixed;
      width: 100%;
    }
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 9.6rem 16rem 9.6rem 16rem;
      position: relative;
      .conversation {
        overflow-y: auto;
        width: 100%;
        .chat-message {
          margin-bottom: 1.6rem;
          display: flex;
          align-items: flex-start;
          max-width: 100%;
          gap: 0.8rem;
          .profile-image {
            width: 3.2rem;
            height: 3.2rem;
            border-radius: 50%;
            overflow: hidden;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .sent-message {
            align-self: flex-end;
            border-radius: 2.4rem 0.4rem 2.4rem 2.4rem;
            padding: 1.2rem 1.6rem;
            max-width: 70%;
          }
          .received-message {
            align-self: flex-start;
            border-radius: 0.4rem 2.4rem 2.4rem 2.4rem;
            padding: 1.2rem 1.6rem;
            max-width: 70%;
            .profile-image {
              width: 3.2rem;
              height: 3.2rem;
              border-radius: 50%;
              img {
                width: 100%;
                height: 100%;
              }
            }
          }
        }
      }
      .user-input {
        display: flex;
        align-items: center;
        bottom: 2.4rem;
        width: 77%;
        position: absolute;
        .chat-input {
          width: 100%;
          margin: 0 4rem;
          padding: 1.2rem 1.6rem;
          border-radius: 2.4rem;
        }
        .button-send {
          position: absolute;
          right: 0%;
          margin: 0 4rem;
          padding: 1.2rem 1.6rem;
        }
      }
    }
  }
}
</style>
