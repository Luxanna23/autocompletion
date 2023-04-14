<?php require('config.php');
if (isset($_GET['search'])) {
    $req = $bdd->prepare("SELECT `id`, `nom` FROM `champions` WHERE `nom` LIKE ?");
    $req->execute(['%' . $_GET['search'] . '%']);
    $res = $req->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($res);
    echo $json;
}

if (isset($_GET['search2'])) {
    $req2 = $bdd->prepare("SELECT `id`, `nom` FROM `champions` WHERE `nom` LIKE ?");
    $req2->execute([$_GET['search2'] . '%']);
    $result2 = $req2->fetchAll(PDO::FETCH_ASSOC);
    $json2 = json_encode($result2);
    echo $json2;
}

if (isset($_GET['id'])) {
    $request = $bdd->prepare("SELECT * FROM `champions` WHERE `id` = ? ");
    $request->execute([$_GET['id']]);
    $result = $request->fetchAll(PDO::FETCH_ASSOC);
    $json = json_encode($result);
    echo $json;
}
?>