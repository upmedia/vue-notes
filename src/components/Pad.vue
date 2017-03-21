<template>
	<div class="pad">
		<input type="text" class="pad__title" placeholder="Unavngivet note" v-model="note.title" v-on:keydown="save">
		<textarea class="pad__text" placeholder="Skriv her..." v-model="note.body" v-on:keydown="save"></textarea>

		<footer class="pad__footer">
			<ul class="pad__footer-items">
				<li class="pad__footer-item">Antal ord: {{ wordCount }}</li>
				<li class="pad__footer-item pad__footer-item--right">Senest gemt: {{ lastSaved }}</li>
			</ul>
		</footer>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'note',
      'lastSaved',
      'wordCount'
    ])
  },
  methods: {
    ...mapActions([
      'saveNote',
      'startSaveTimeout'
    ]),
    save () {
      console.log(this.note.id)
      if (!this.note.id) {
        console.log('inside if')
        this.saveNote()
        return
      }
      console.log('after if')
      this.startSaveTimeout()
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/placeholders';

  .pad {
    flex: 4;
    display: flex;
    flex-direction: column;

    &__title {
      width: 100%;
      border: 0;
      font: inherit;
      font-size: 1.6em;
      outline: none;
      padding: 25px 20px 20px 30px;
    }

    &__text {
      flex: 1;
      margin: 0;
      width: 100%;
      padding: 20px 30px;
      outline: none;
      border: 0;
      font: inherit;
      resize: none;
      line-height: 2em;

      mask-image: linear-gradient(
        to bottom,
        transparent 0%,
        #fff 5%,
        #fff 95%,
        transparent 100%
      );
    }

    &__footer {
      padding: 20px 30px;
    }
  }

  .pad__footer-items {
    @extend %inline-list;
  }

  .pad__footer-item {
    flex: 1;
    font-size: 0.9em;

    &--right {
      margin-left: auto;
      text-align: right;
    }
  }
</style>
