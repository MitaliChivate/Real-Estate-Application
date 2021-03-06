package com.fileuploaddownload.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fileuploaddownload.model.DatabaseFile;

@Repository
public interface DatabaseFileRepository extends JpaRepository<DatabaseFile, String> {

	List<DatabaseFile> findByPropertyIdAndColumnNo(Integer id1, Integer coloumn);
}