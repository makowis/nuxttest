<template>
  <div class="beenya">
    <tbt-h1>びーにゃの部屋</tbt-h1>
    <tbt-beenya-img :class="$style.icon" />
    <table :class="$style.beenyaTable">
      <tbody>
        <tr>
          <th>名前</th>
          <td>びーにゃ</td>
        </tr>
        <tr>
          <th>役割</th>
          <td>アイドル</td>
        </tr>
        <tr>
          <th>自己紹介</th>
          <td>にゃにゃにゃにゃにゃにゃにゃー！(定時後ビールタイムだー！！)</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style module>
.icon {
  max-width: 90%;
  margin-bottom: 20px;
}

.beenyaTable {
  max-width: 90%;
  margin: auto;
  border: solid 1px black;
  border-collapse: separate;
}

.beenyaTable td,
.beenyaTable th {
  border: solid 1px black;
  padding: 5px 10px;
}
</style>
