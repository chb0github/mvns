module.exports = (hit) => {
  const result =
`<dependency>
    <groupId>${hit.g}</groupId>
    <artifactId>${hit.a}</artifactId>
    <version>${hit.latestVersion}</version>
</dependency>`
  return result
}
