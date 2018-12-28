<template>
  <v-container>
    <v-layout>
      <v-flex xs4>
        <Projects></Projects>
      </v-flex>

      <v-flex xs8 clss="pl-4">
        <Panel title="Tasks">
          <h1>TESting</h1>
        </Panel>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Projects from '@/components/Projects.vue';
import router from '../router';
import { mapGetters } from 'vuex';

export default {
  components: {
    Projects,
  },
  mounted() {
    if (!this.token) {
      return router.push('/login');
    }
  },
  computed: {
    ...mapGetters('authentication', [
      'isLoggedIn',
    ]),
  },
};
</script>
