Roboczy plik funkcjonalności

- Zarządzanie licznikami
    1. Funkcjonalność realizuje:
        ★ wyświetlanie liczników mieszkania
        ★ Dodawanie liczników do mieszkania
        ★ Usuwanie liczników mieszkania
        ★ Edycja liczników mieszkania
        ★ Wyświetanie historii odczytów danego licznika
        ★ Dodawanie odczytu do licznika
        ★ Edycja odczytu licznika
        ★ Kasowanie odczytu licznika
    2. Użycie
        ★ Dołączyć do jsp widok z ekranem liczników - <jsp:include page="../meters/metersModal.jsp"/>
        ★ Do kontenera w którym dynamicznie są dodawane przyciski mające otwierać modal dodać klasę haveOpenMeterButtons - class="haveOpenMeterButtons"
        ★ Do przycisków mających otworzyć ekran zaządzania licznikami dodać klasę openMeters - class="openMeters"
        ★ Do przycisków mających otworzyć ekran zaządzania licznikami dodać value nastawione na ID mieszkania - value="1"

- Okno potwierdzenia kasowania rekordu
     1. Funkcjonalność realizuje
        ★ Wyświetlenie okna ostrzegającego kasowania rekordu
        ★ Wywołanie zadanej funkcji z zadanym parametrem w przypadku potwierdzenia kasowania rekordu
      2. Użycie
        ★ Dołączyć do jsp widok potwierdzeniem kasowania - <jsp:include page="../util/deleteConfirm.jsp"/>
        ★ Wywołać metodę deleteEntity przekazując 3 parametry:
                - String    - tekst dołączony do komunikatu o kasowani
                - function  - funkcja ktora zostanie wywołana po potwierdzeniu chęci kasowania
                - mumeric   - id które zostanie przekazane do wywołanej funkcji
            przykład użycia       deleteEntity("Mieszkanie 5", deleteFlat, 1)


