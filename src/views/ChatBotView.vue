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
      messages: [],
      newMessage: "",
    };
  },
  methods: {
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
      this.messages.push({
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat, necessitatibus tenetur. Magni, qui. Ipsa accusantium dolores similique quibusdam? A consequatur sint debitis quia repellendus aliquam voluptates repellat asperiores quidem distinctio sed suscipit, atque at incidunt vel illum laboriosam quis saepe harum ea veritatis consequuntur minima! Deserunt vero rem eius quas similique veniam, aut eveniet tempore, itaque adipisci assumenda? Suscipit explicabo quis, ab at vel officia modi ut placeat, doloremque facere molestias vero expedita voluptatem rerum quisquam ex vitae. Numquam eius doloremque quibusdam quam hic optio dolor, atque laboriosam, ducimus veniam quia. Ullam ut aspernatur sit, odit temporibus exercitationem quisquam, consequatur deserunt sunt inventore itaque officiis corrupti ab deleniti quam expedita facere voluptatibus excepturi, illum dicta? Quae necessitatibus nisi praesentium minus optio ex fuga molestias, repellendus quia iure aperiam voluptatibus adipisci aspernatur assumenda itaque, aliquid, nemo nulla sapiente ipsum officia? Vel ratione culpa doloremque molestiae et obcaecati repellendus voluptatem quis necessitatibus consequuntur eum quidem, id consequatur maiores in veniam, sequi nobis neque officiis. Aliquid reiciendis quas esse perspiciatis ipsam animi laborum repudiandae nostrum maxime quo totam, neque sunt doloribus sapiente repellat, excepturi illo est hic quis recusandae iste sint deserunt! Quo quidem voluptatum mollitia, laudantium quas totam, iste ullam perspiciatis enim consectetur ipsa quos distinctio, officia nesciunt a itaque quod error libero eius laboriosam nisi repellat voluptate provident similique! Iure, eos nihil. Incidunt obcaecati eius quia, quisquam nemo perspiciatis, repellat architecto aliquam, magnam a laborum. Eaque delectus architecto eum numquam voluptatum enim tempora mollitia velit debitis exercitationem ex ullam quis aperiam sapiente nam, alias saepe nesciunt quasi animi eos illo quod corporis natus! Reprehenderit incidunt eligendi provident voluptas quod accusantium ipsam dolor fugiat reiciendis numquam nemo repellendus dolore vitae suscipit iste expedita obcaecati asperiores adipisci, perspiciatis in quis maiores natus. Possimus corrupti repellat ea distinctio? Quae nulla aspernatur dicta ullam, qui voluptatum animi natus magnam excepturi deleniti mollitia dolorem tempore non labore temporibus nostrum ab odio officia quibusdam saepe, quam esse! Consequatur maiores molestias, quasi cupiditate officiis eaque odio porro, sint, a beatae at quos modi impedit est. Saepe hic ea corporis illum culpa velit ratione atque quos harum sapiente quam debitis eum, esse magnam error explicabo. Provident numquam, ducimus iste sunt nostrum alias harum sint explicabo repellendus vitae impedit. Officia placeat illum eligendi repudiandae ab totam deserunt ea fugiat atque. Perferendis amet, ipsam quas mollitia odio asperiores aspernatur reprehenderit nostrum? Impedit saepe quisquam ipsam quod pariatur modi dolorem provident! Explicabo numquam nam ut mollitia voluptatem quae error incidunt reprehenderit saepe quod aspernatur et, quasi recusandae. Vel commodi dolor quas minus in praesentium facere quisquam eos. Veniam eius facilis eaque dolore, numquam necessitatibus porro ad dicta hic ducimus. Animi a sit beatae quis, laborum quae possimus voluptates fugit illum corrupti est tempora aliquid excepturi deserunt ducimus. Adipisci doloribus sint nulla beatae ab perferendis cum consequatur? Id quam vitae delectus nam iste, minima, et similique quas enim animi tempora placeat necessitatibus earum sunt consequatur vel. Repudiandae provident eius necessitatibus voluptatibus, quidem minima non, tenetur error saepe totam repellendus, voluptatum temporibus eum odit?",
      });
      const BASE_URL = process.env.VUE_APP_API_PATH;
      const data = {
        question: text,
      };
      try {
        const response = await axios.post(BASE_URL, data, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
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
        width: 75%;
        position: absolute;
        .chat-input {
          width: 100%;
          margin: 0 4rem;
          padding: 1.2rem 1.6rem;
          border-radius: 2.4rem;
        }
      }
    }
  }
}
</style>
