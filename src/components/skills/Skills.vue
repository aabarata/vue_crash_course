<template>
  <div class="hello">
    <div class="holder">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form @submit.prevent="handleSubmit(addSkill)">
          <ValidationProvider
            class="validatorWrapper"
            rules="minlength:5|required"
            v-slot="{ errors }"
          >
            <input
              type="text"
              placeholder="Enter a skill you have..."
              v-model="skill"
            />
            <transition
              name="alert-in"
              enter-active-class="animated flipInX"
              leave-active-class="animated flipOutX"
            >
              <p class="alert" v-if="errors[0]">
                {{ errors[0] }}
              </p>
            </transition>
          </ValidationProvider>
        </form>
      </ValidationObserver>
      <ul>
        <transition-group
          name="list"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li v-for="(data, index) in skills" :key="index">
            {{ data.skill }}
            <i class="fa fa-minus-circle" v-on:click="removeSkill(index)" />
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      skill: "",
      skills: [
        { skill: "Vue.js" },
        { skill: "Fontend Developer" },
        { skill: "Backend Developer" },
        { skill: "Fullstack Developer" }
      ]
    };
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
    },
    removeSkill(index) {
      this.skills.splice(index, 1);
    }
  }
};
</script>

<style lang="less" src="./Skills.less" scoped></style>
