<template>
  <div>
    <div>Name:{{name}}<br>Phone:{{phone}}</div>
    <div id="solution" @click="showSolution = true">
      I am a <transition name="fade">
      <span id="dragon" v-show="showSolution">Dragon</span>
      </transition>
    </div>
    <u-form :config="formType" @submited="formSubmited"></u-form>
    <p>{{outputPrinter}}</p>
    <dialog-box command="confirmation" :cancellable="true"
      @cancel="msg = 'cancelled'"
      @ok="msg = 'confirmed'">
      <span slot="icon"><i class="fa fa-home" style="font-size: 16px"></i></span>
      <span slot="message">Do you confirm?</span>
    </dialog-box>
    <p>Output: {{msg}}</p>
  </div>
</template>

<script>
import DialogBox from './ui/DialogBox'
import UForm from './ui/UForm'
export default {
  name: 'lessons',
  components: {
    DialogBox,
    UForm
  },
  data () {
    return {
      name: 'clx',
      phone: '345678',
      showSolution: false,
      outputPrinter: [],
      msg: 'undefined',
      formType: {
        fields: [
          {
            name: 'Name',
            required: true
          },
          {
            name: 'Email',
            type: 'email'
          }
        ]
      }
    }
  },
  methods: {
    formSubmited (data) {
      alert(JSON.stringify(data))
    }
  }
}
</script>

<style scoped>
  #solution {
    cursor: pointer;
  }
  .fade-enter {
    opacity: 0
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
</style>
