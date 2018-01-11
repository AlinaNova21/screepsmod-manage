<template>
  <div>
    <div class="md-layout md-gutter">
      <div class="md-layout-item">
        <md-card>
          <md-card-header>
            <div class="md-title">Users</div>
          </md-card-header>
          <md-card-content>
            <md-list>
              <md-list-item v-for="user in users" :key="user._id" @click="select(user)">
                <md-avatar>
                  <img :src="badgeUrl(user)" :alt="user.username">
                </md-avatar>

                <span class="md-list-item-text">{{ user.username }}</span>

                <md-button class="md-icon-button md-list-action">
                  <md-icon class="md-primary">search</md-icon>
                </md-button>
              </md-list-item>
            </md-list>
          </md-card-content>
        </md-card>
      </div>
      <div class="md-layout-item">
        <md-card v-if="selected">
          <md-card-header>
            <md-avatar>
              <img :src="badgeUrl(selected)" :alt="selected.username">
            </md-avatar>

            <div class="md-title">{{ selected.username }}</div>
            <div class="md-subtitle">{{ selected._id }}</div>
          </md-card-header>

          <md-card-content>
            <md-list>
              <!-- <md-subheader align="left">Account</md-subheader> -->
              <md-list-item>
                <div class="md-list-item-text">
                  <span>{{ selected.registeredDate }}</span>
                  <span>Registered Date</span>
                </div>
              </md-list-item>
              <md-list-item v-if="selected.rooms">
                <div class="md-list-item-text">
                  <span>{{ selected.rooms.length }} Rooms</span>
                </div>
                <md-chip v-for="room in selected.rooms" md-static>{{ room }}</md-chip>
              </md-list-item>
              <md-list-item>
                <div class="md-list-item-text">
                  <span>Email: {{ selected.email || 'None' }}</span>
                  <!-- <span>Email</span> -->
                </div>
              </md-list-item>
              <md-list-item>
                <div class="md-list-item-text">
                  <span>{{ ((selected.money || 0) / 1000).toFixed(3) }} Credits</span>
                </div>
              </md-list-item>
              <md-list-item>
                <div class="md-list-item-text">
                  <span>{{ selected.gcl }} GCL</span>
                </div>
              </md-list-item>
              <md-list-item>
                <div class="md-list-item-text">
                  <span>{{ selected.cpu }} CPU</span>
                </div>
              </md-list-item>
              <md-list-item>
                <div class="md-list-item-text">
                  <span>{{ selected.cpuAvailable }} Bucket</span>
                </div>
              </md-list-item>
            </md-list>
          </md-card-content>

          <md-card-actions>
            <md-button>Action</md-button>
            <md-button>Action</md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'HelloWorld',
  created () {
    this.getUsers().then(() => this.select(this.users.find(u => u)))
  },
  data () {
    return {
      selected: {}
    }
  },
  computed: {
    ...mapState(['users'])
  },
  methods: {
    ...mapActions(['getUsers']),
    badgeUrl (user) {
      return `https://server1.screepspl.us/api/user/badge-svg?username=${user.username}`
    },
    select (user) {
      this.selected = user
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
