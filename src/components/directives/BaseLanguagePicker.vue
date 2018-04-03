<template>
    <b-nav-item-dropdown right v-bind:text="$t('GENERAL.LANGUAGE.CHANGE_LANGUAGE')">
        <b-dropdown-item v-on:click="changeLanguage('en')">
            <b-img class="flag flag-en" /> {{$t("GENERAL.LANGUAGE.ENGLISH")}}
        </b-dropdown-item>
        <b-dropdown-item v-on:click="changeLanguage('de')">
            <b-img class="flag flag-de" /> {{$t("GENERAL.LANGUAGE.GERMAN")}}
        </b-dropdown-item>
    </b-nav-item-dropdown>
</template>
   
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import languageSrv from "../../common/Language.srv";

@Component({})
export default class extends Vue {
    private changeLanguage(locale: string) {
        languageSrv.changeLocale(locale);
    }
}
</script>

<style scoped lang="less">
.flag {
  background-repeat: no-repeat;
  background-size: contain;
  height: 13px;
  width: 18px;
  margin-bottom: 3px;
  &.flag-de {
    background-image: url("../../imgs/flags/de.png");
  }
  &.flag-en {
    background-image: url("../../imgs/flags/en.png");
  }
  &.flag-es {
    background-image: url("../../imgs/flags/es.png");
  }
  &.flag-fr {
    background-image: url("../../imgs/flags/fr.png");
  }
  &.flag-it {
    background-image: url("../../imgs/flags/it.png");
  }
}
</style>





























.flag {
    background-repeat: no-repeat;
    background-size: contain;
    display: inline-block;
    height: 17px;
    vertical-align: middle;
    width: 17px;
    &.flag-de {
        background-image: url("../imgs/flags/de.png");
    }
    &.flag-en {
        background-image: url("../imgs/flags/en.png");
    }
    &.flag-es {
        background-image: url("../imgs/flags/es.png");
    }
    &.flag-fr {
        background-image: url("../imgs/flags/fr.png");
    }
    &.flag-it {
        background-image: url("../imgs/flags/it.png");
    }
}
