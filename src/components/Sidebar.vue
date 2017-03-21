<template>
	<div class="sidebar">
    <div v-if="notes.length">
      <note v-for="note in notes" :note="note"></note>
    </div>
		<div class="sidebar__content" v-else>
			Ingen noter endnu - skriv nogen.
		</div>
    <div class="sidebar__content">
      <a href="#" @click.prevent="clearCurrentNote">Opret ny note</a>
    </div>
	</div>
</template>

<script>

import Note from './Note'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Note
  },

  computed: {
    ...mapGetters([
      'notes'
    ])
  },

  methods: {
    ...mapActions([
      'clearCurrentNote'
    ])
  }

}
</script>

<style scoped lang="scss">
	.sidebar {
		background-color: #f9f9f9;
		flex: 1;
		height: 100%;
		min-width: 28%;
    	border-right: solid 2px #eee;
    	overflow-y: scroll;

		&__content {
			padding: 30px;

			a {
				text-decoration: none;
				color: inherit;
			}
		}
	}
</style>
