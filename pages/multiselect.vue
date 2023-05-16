<template>
  <div>
    <SharedMultiSelectTagging
      :options="[
        { title: 'Vue js', id: 'vue' },
        { title: 'Angular', id: 'angular' },
        { title: 'React', id: 'react' },
        { title: 'Svelte', id: 'svelte' },
        { title: 'Ember', id: 'ember' },
        { title: 'Laravel', id: 'laravel' },
      ]"
      :field-name="{
        label: 'title',
        key: 'id',
      }" />
    <SharedMultiSelectTagging
      :options="[
        { title: 'Vue js', id: 'vue' },
        { title: 'Angular', id: 'angular' },
        { title: 'React', id: 'react' },
        { title: 'Svelte', id: 'svelte' },
        { title: 'Ember', id: 'ember' },
        { title: 'Laravel', id: 'laravel' },
      ]"
      :field-name="{
        label: 'title',
        key: 'id',
      }" />
  </div>
</template>
